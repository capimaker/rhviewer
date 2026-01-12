"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export function StripeDialogPayment() {
    const [Open, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

     const handleOpenChange = async (openState: boolean) => {
        setIsOpen(openState);

        if (openState) {
            const stripe = await stripePromise;
            const response = await axios.post("/api/checkout")
            const { clientSecret } = response.data;

            const checkout = await stripe?.initEmbeddedCheckout({fetchClientSecret: async () => clientSecret});

            checkout?.mount("#checkout-modal");
        }
    };

  return (
     <Dialog open={Open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
                <Button className=' text-white bg-blue-600 hover:bg-blue-800 ' variant="secondary">
                      Unlock Unlimited Access
                </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
             <DialogHeader>
                 <DialogTitle className='hidden '>Purchase Plan</DialogTitle>
                 <div id='checkout-modal' className='min-h-[600px]' ref={containerRef}/>
                    
             </DialogHeader>
        </DialogContent>
      </Dialog>
  )
}
