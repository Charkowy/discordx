//posible alternativa
import { auth } from '@clerk/nextjs/server'
// como se ve en el video import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db"

export const currentProfile = async () => {
    const { userId } = auth();

    if (!userId) {
        return null;
    }

    const profile = await db.profile.findUnique({
        where: {
            userId
        }
    });

    return profile;
}
