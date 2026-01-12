import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'

export async function GET(){
    const { userId } = await auth()
    if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 })
    }

    const user = await db.user.findUnique({
        where: { id: userId,},
            select: {hasPaid: true, hasUsedFreeTrial: true},
      })
      return NextResponse.json(user);
}