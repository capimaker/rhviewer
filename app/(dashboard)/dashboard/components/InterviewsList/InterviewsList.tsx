'use client'
import axios from "axios"
import { BtnCreateInterview, StripeDialogPayment } from "@/componentes/Shared"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { Interview } from "@prisma/client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { InterviewImage } from "./InterviewImage"

export  function InterviewsList() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [hasPaid, setHasPaid] = useState<boolean | null>(null);
  const [hasUsedFreeTrial, setHasUsedFreeTrial] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const res = await axios.get('/api/user/status')
        setHasPaid(res.data.hasPaid)
        setHasUsedFreeTrial(res.data.hasUsedFreeTrial)
      }catch(error){
        console.error("Error", error)
      }
    };
    fetchUserStatus()
  }, [])

  useEffect(() => {
    const fetchInterviews = async () => {
      try{
        const res = await axios.get("/api/interviews");
        setInterviews(res.data);

      } catch  {
        setError("Error fetching interviews")

      } finally{
        setLoading(false)
      }
    }
    fetchInterviews();
}, [])

  const levelBadgeClasses: Record<string, string> = {
    junior: "bg-green-600/20 border-green-400/30 text-green-300",
    mid: "bg-yellow-600/20 border-yellow-400/30 text-yellow-300",
    senior: "bg-red-600/20 border-red-400/30 text-red-300",
  };



  return <div>
    <div className="mt-5 p-4 md:px-10 border border-white/10 rounded-md bg-white/10 backdrop-blur-lg">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold">Last interviews</h2>

      {(hasPaid || !hasUsedFreeTrial) && <BtnCreateInterview/>}
      {!hasPaid && hasUsedFreeTrial && <StripeDialogPayment/>}

      

    </div>
    <div className="mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_auto] text-sm font-medium text-stale-200 mb-4">
        <p className="text-left">Date</p>
        <p>Lessons</p>
        <p className="text-left">Level</p>
        <p className="text-left">Type</p>
        <p className="text-center">Actions</p>
      </div>

       {loading && <p>Loading interviews...</p>} 
       {error && <p className="text-red-500">{error}</p>}
       {!loading && interviews.length === 0 && <p>No interviews found</p>}

        {interviews.slice(0, 5).map((interview) => (
          <div key={interview.id} className="grid min-w-0 grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_auto] items-center justify-between border-b pb-4 last:border-b-0 my-4">

            <span className="text-left text-sm text-white-70">
              {new Date(interview.startedAt).toLocaleDateString()}
              </span>

            <div className="flex min-w-0 gap-4 items-center">
              <InterviewImage  interview={interview}/>

              <div className="flex min-w-0 flex-col gap-1">
                <h3 className="truncate text-2xl font-semibold">{interview.name}</h3>
              </div>
            </div>
           <span className={cn("text-xs px-2 py-1 rounded-full border w-fit", levelBadgeClasses[interview.level] )}>
            {interview.level}
            </span> 
            <span className="bg-blue-600/20 border-blue-400/30 border text-sm text-blue-200 py-1 px-3 rounded-full w-fit">
              {interview.rol}
            </span>
            <Button
              variant="ghost"
              className="relative justify-self-start lg:justify-self-end border border-blue-400/40 bg-blue-500/10 text-blue-100 shadow-[0_0_16px_rgba(59,130,246,0.45)] transition-shadow hover:bg-blue-500/20 hover:shadow-[0_0_24px_rgba(59,130,246,0.65)]"
              asChild
            >
              <Link href={`/dashboard/interview/${interview.id}`}>
              Details
              </Link>

            </Button>
          </div>
        ))}
    </div>
    </div>
    </div> 
}
