import { Stripe } from "stripe";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-12-15.clover",
});

export async function POST() {
    try {
        const user = await currentUser();

        const session = await stripe.checkout.sessions.create({
            ui_mode: "embedded",
            mode: "payment",
            payment_method_types: ["card"],
            line_items: [
               { 
                price: "price_1SoowyGsGFBsdkElkDVS8kDk",
                quantity: 1,
               }
            ],
            return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
            customer_email: user?.emailAddresses[0].emailAddress,
            metadata: {
                userId: user?.id || ""
            }
            
        })
        return NextResponse.json({
        clientSecret: session.client_secret
    })
        }catch(error){
            console.error("[STRIPE_SESSION_ERROR]", error)
            return NextResponse.json({status: 500, message: "Error creating Stripe session"})
            
    }
}

