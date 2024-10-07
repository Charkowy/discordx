import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/lib/db";

export async function PATCH(
    req: Request,
    { params }: { params: { inviteCode: string } }
) {
    try {
        const profile = await currentProfile();
        if (!profile) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!params.inviteCode) {
            return new NextResponse("Invite Code Missing", { status: 400 });
        }

        // Find the server by inviteCode to get the id
        const serverToUpdate = await db.server.findUnique({
            where: {
                inviteCode: params.inviteCode, // Use inviteCode as a unique lookup
            },
        });

        // Check if the server exists and belongs to the current profile
        if (!serverToUpdate) {
            return new NextResponse("Server not found", { status: 404 });
        }

        // Update the server's invite code using its ID
        const updatedServer = await db.server.update({
            where: {
                id: serverToUpdate.id, // Use the ID from the found server
            },
            data: {
                inviteCode: uuidv4(), // Generate a new invite code
            },
        });

        return NextResponse.json(updatedServer);
    } catch (error) {
        console.error("[SERVER-UPDATE ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
