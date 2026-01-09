import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request, { params }: { params: Promise <{ id: string }> }) {

   const {id} = await params 

   try{

    const interview = await db.interview.findUnique({
        where:{
            id: id,
        },
    });
        if(!interview){
            return NextResponse.json("Interview not found", {status: 404})
        }
        return NextResponse.json(interview)
   } catch(error) {
    console.error("[INTERVIEW ID GET]", error);
    return new NextResponse("Error getting interview", { status: 500})

   }
}
