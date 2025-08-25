"use client"

import { Button } from "@/components/ui/button";


import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";



const EmptyBoard = () => {
  const {organization} = useOrganization()
  const {mutate,pending} = useApiMutation(api.board.create);

  const onClick = ()=>{
    if(!organization) return;
    mutate({
      orgId: organization.id,
      title:"Untitled"
    })
    .then((id)=>{
      toast.success("Board created");
    })
    .catch(()=> toast.error("failed to create board"))
  }
  return (
    <div className="h-full flex flex-col items-center justify-center">
       <Image
       src="/note.svg"
       height={110}
       width={110}
       alt="Empty"
       />
       <h2 className="text-2xl font-semibold mt-6">
        Create Your first boards!
       </h2>
       <p className="text-muted-foreground text-sm mt-2">
        start by creating a board for your organization
       </p>
       <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create board
        </Button>
       </div>
        </div>
  )
}

export default EmptyBoard