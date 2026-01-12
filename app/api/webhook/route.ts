import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-12-15.clover" });

    export async function POST(req: Request) {
        const body = await req.text();
        const headerList = await headers();
        const signature = headerList.get("stripe-signature") as string;

        let event: Stripe.Event;
        try {
            event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
        } catch (error) {
            console.error("❌ Error validating webhook signature:", error);
            return new NextResponse("Webhook signature verification failed", { status: 500 });
        }
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session?.metadata?.userId;

        if(event.type === "checkout.session.completed"){
            if (!userId) {
                return new NextResponse("Unauthorized", { status: 401 });
                }
                await db.payment.create({
                    data: {
                        userId,
                        amount: 1,
                        
                        
                       },
                    });
                    await db.user.update({
                        where: {id: userId},
                        data: {
                            hasPaid: true,
                            paidAt: new Date(),
                        }
                });
            }
            return new NextResponse("Webhook received", { status: 200 });
        }
