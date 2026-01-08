import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const { userId } = await auth ();

    try{
        if(!userId){
            return new NextResponse("Unauthorizeed", {status: 401 });

        }

        let user = await db.user.findUnique({ where: {id:userId}});

        if(!user) {
            user = await db.user.create({
                data: {
                    id: userId, 
                }
            })
        }
        const { name, rol , level } = await req.json();
        const interview = await db.interview.create({
            data: {
                userId: userId,
                name: name,
                rol: rol,
                level: level,
            },
        });

        return NextResponse.json(interview) 
    }catch(error){
        console.log("[INTERVIEW]", error);
        return new NextResponse("Internal Error", { status: 500});

    }
    
}