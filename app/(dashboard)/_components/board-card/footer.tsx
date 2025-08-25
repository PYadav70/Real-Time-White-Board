import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { title } from "process";
import { Button } from "@/components/ui/button";

interface FooterProps {
    title: string;
    authorLabel :  string;
    createdAtLabel: string;
    isFavorite:boolean;
    onClick: ()=> void;
    disabled: boolean;
};

export const Footer = ({
title,
authorLabel,
createdAtLabel,
isFavorite,
onClick,
disabled
 }: FooterProps)=>{

return (
    <div className="relative bg-white p-3">
        <p className="text-[13px] truncate max-w-[calc(100%-20px)">
         {title}
        </p>
        <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
            {authorLabel},{createdAtLabel}
        </p>
        <Button
        disabled={disabled}
        onClick={onClick}
        className={cn(
           "opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate hover:text-blue-600",
           disabled &&  "cursor-not-allowed opacity-75"
        )}>
            <Star
            className={cn(
                "h-4 w-4",
                isFavorite && "fill-blue-600 text-blue-600"
            )}/>
        </Button>
    </div>
)
}

