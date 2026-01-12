import { Bot } from "lucide-react";
import { TranscriptBoxProps } from "./TranscriptBox.types";

export  function TranscriptBox(props: TranscriptBoxProps ) {
    const { transcript } = props;
  return( <div className="mt-5 p-4 md:px-10 border border-white/10 rounded-md bg-white/10 backdrop-blur-lg max-h-9/1 ovewrflow-y-auto">
    <h3 className="text-2xl font-semibold mb-2">Transcript</h3>

    {transcript.length > 0 ? (
        <div> 
            {transcript.map((msg, index)=> (
                <div key={index} className={`flex ${msg.role == "user" ? "justify-end" : "justify-start"} `}>
                    <div className="flex items-start gap-2 max-w-[75%]">

                        <div className={`rounded-lg px-4 py-2 text-sm items-center gap-2 mb-2 ${msg.role == "user" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
                            {msg.role != "user" && (
                                <Bot className="w-4 h-4 text-blue-500 mt-1" />
                        )}
                        {msg.content}

                        </div>

                    </div>

                </div>
          ))}
        </div>
        
        ) : (<p className="text-gray-400 text-sm">Not transcript Found</p>)}

    </div>
  )
}
