"use client"
import { Plus } from "lucide-react"
import { ActionTooltip } from "../ui/action-tootips"

export const NavigationAction = () => {
    return (
        <div>
            <ActionTooltip
                side="right"
                aling="center"
                label="Add a server"
            >
                <button className="group flex items-center">
                    <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bd-background dark:bg-neutral-700 grouo-hover:bg-emerald-500">
                        <Plus className="group-hover:text-white transition text-emerald-500" size={25}>

                        </Plus>

                    </div>
                </button>
            </ActionTooltip>
        </div>
    )
}