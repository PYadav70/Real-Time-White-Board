"use client";
import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive, isLoaded } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (isActive || !isLoaded) return; // ✅ safe checks
    setActive?.({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Hint 
      label={name}
      side="right"
      align="start"
      sideOffset={18}>

      
      <Image
        fill
        alt={name}
        src={imageUrl}
        onClick={onClick}
        className={cn(
          "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
          isActive && "opacity-100 ring-2 ring-blue-500" // highlight active
        )}
      />
      </Hint>
    </div>
  );
};
