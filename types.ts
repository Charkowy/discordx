import { Server, Member, Profile } from "@prisma/client"
export type ServerWithProfiles  = Server & {
    members: (Member & {profile: Profile })[];
}