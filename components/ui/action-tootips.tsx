"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

interface ActionTooltipProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    aling?: "start" | "center" | "end";
}

export const ActionTooltip = ({
    label, children, side, aling
}: ActionTooltipProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={aling}>
                    <p className="font-semibold text-sm capitalize">
                        {label.toLowerCase()}
                    </p>

                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}