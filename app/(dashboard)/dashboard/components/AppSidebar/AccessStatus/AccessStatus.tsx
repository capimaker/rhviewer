"use client";
import { useEffect, useState } from 'react';
import { StatusPaid } from './StatusPaid';
import { StatusFreeTrial } from './StatusFreeTrial';
import { Badge } from '@/components/ui/badge';



import axios from 'axios';
import { StripeDialogPayment } from '@/componentes/Shared';

export  function AccessStatus() {

    const [hasPaid , setHasPaid] = useState <boolean | null>(false);
    const [hasUsedFreeTrial, setHasUsedFreeTrial] = useState <boolean | null>(null);

    useEffect(() => {
        const fetchUserStatus = async () => {
          try {
            const res = await axios.get('/api/user/status')
            setHasPaid(res.data.hasPaid)
            setHasUsedFreeTrial(res.data.hasUsedFreeTrial)
          }catch(error){
            console.log("Error Fetching user status ", error)
          }
    }
        fetchUserStatus()
}, [])

    if (hasPaid) {
        return <StatusPaid />;
    }
    if (!hasUsedFreeTrial && !hasPaid) {
        return <StatusFreeTrial />;
    } 

   

  return (
    <div className='p-2 border-white bg-blue-800/20 border rounded-md flex flex-col items-center justify-center'>
        <h3 className="font-semibold text-xl mb-2 text-center">Plan not activated</h3>
        <Badge variant="outline" className="w-full bg-red-900 py-1"> Limited access</Badge>

      <StripeDialogPayment />
    </div>
  )
}
