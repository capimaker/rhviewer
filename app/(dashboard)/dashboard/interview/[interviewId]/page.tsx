"use client"
import { useEffect, useState} from "react"
import { useParams, useRouter } from "next/navigation"
import { Calendar, Drama, Gauge, LoaderCircle, Webhook  } from "lucide-react"
import axios from "axios"
import { Interview } from "@prisma/client"
import { TranscriptMessage } from "./page.types"
import { InfoCard, TranscriptBox } from "./components"

export default function InterviewPage() {
  const params = useParams()
  const interviewId = params?.interviewId
  const router = useRouter()

  const [interview, setInterview] = useState<Interview>();

  useEffect(()=> {
    const fetchInterview = async () =>{
      try{
        const response = await axios.get(`/api/interview/${interviewId}`)
        setInterview(response.data);

      }catch(error){
        console.log("Error Fetching interview ", error)
        router.push("/dashboard")
        
      }
    }
    if (interviewId) {
      fetchInterview()
    }

  },[interviewId, router])
  

  if (!interview){
    return(
    <p className="h-screen flex items-center justify-center">
      <LoaderCircle className="animate-spin h-10 w-10"/>
    </p>
  )}

  const transcriptFinal = Array.isArray(interview?.transcript) ? (interview.transcript as TranscriptMessage[]) : [];

  return <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-primary">Interview Summary</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-3 rounded-md p-6 bg-white/10 backdrop-blur-lg text-white border border-white/20">
    <InfoCard 
    icon={Webhook}
    name={interview.name}
    label="name"
    />
    <InfoCard 
    icon={Gauge}
    name={interview.level}
    label="level"
    />
    <InfoCard 
    icon={Calendar}
    name={new Date(interview.startedAt).toLocaleTimeString()}
    label="Date"
    />
    <InfoCard 
    icon={Drama}
    name={interview.rol}
    label="Role"
    />

    </div>
    <TranscriptBox transcript={transcriptFinal} />
    </div>
}
 