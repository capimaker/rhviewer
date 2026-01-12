import {  currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const user = await currentUser();

    try{
        if(!user){
            return new NextResponse("Unauthorizeed", {status: 401 });

        }

        let userTmp = await db.user.findUnique({ where: {userId:user.id}});

        if(!userTmp) {
            userTmp = await db.user.create({
                data: {
                    userId: user.id, 
                    email: user?.emailAddresses[0]?.emailAddress,
                    name: user?.firstName,
                }
            })
        }
        const { name, rol , level } = await req.json();

        const interview = await db.interview.create({
            data: {
                userId: userTmp.userId,
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