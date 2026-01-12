import {NextResponse} from 'next/server'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server';

export async function POST(req: Request, {params}:{params: Promise<{id: string }> }){

    const {id} = await params;
    const {transcript} = await req.json();

    const user = await currentUser();
    if (!user) {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    await db.interview.update({
        where: {id},
        data: {
            completedAt: new Date(),
            transcript: transcript || [],
        }
    });

    await db.user.update({
        where: {userId: user.id},
        data: {
            hasUsedFreeTrial: true,
        }
    });

    return NextResponse.json({message: "Interview completed succesfully "})

}