"use client";
import { useState } from 'react';
import { StatusPaid } from './StatusPaid';
import { StatusFreeTrial } from './StatusFreeTrial';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export  function AccessStatus() {
    const [isOpen, setIsOpen] = useState(false);
    const hasPaid = false;
    const statusFree = true;
    if (hasPaid) {
        return <StatusPaid />;
    }
    if (statusFree) {
        return <StatusFreeTrial />;
    }

    const handleOpenChange = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className='p-4 border-white bg-blue-800/20 border rounded-md'>
        <h3 className="font-semibold text-xl mb-2 text-center">Plan not activated</h3>
        <Badge variant="outline" className="w-full bg-red-900 py-1"> Limited access</Badge>

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
                <Button className='w-full font-semibold text-blue-700' variant="secondary">
                      Unlock for 9€
                </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
             <DialogHeader>
                 <DialogTitle className='hidden '>Purchase Plan</DialogTitle>
                 <div id='checkout-modal' className='min-h-[600px]'/>
                    
             </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
