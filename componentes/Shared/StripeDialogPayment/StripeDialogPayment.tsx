"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { useState } from "react";

export function StripeDialogPayment() {
    const [isOpen, setIsOpen] = useState(false);

     const handleOpenChange = () => {
        setIsOpen(!isOpen);
    };

  return (
     <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
                <Button className=' text-white bg-blue-600 hover:bg-blue-800 ' variant="secondary">
                      Unlock Unlimited Access
                </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
             <DialogHeader>
                 <DialogTitle className='hidden '>Purchase Plan</DialogTitle>
                 <div id='checkout-modal' className='min-h-[600px]'/>
                    
             </DialogHeader>
        </DialogContent>
      </Dialog>
  )
}
