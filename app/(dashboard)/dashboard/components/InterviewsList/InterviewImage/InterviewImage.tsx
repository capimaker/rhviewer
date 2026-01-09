import { roles } from "@/componentes/Shared/BtnCreateInterview/FormCreateInterview/FormCreateInterview.data";
import { InterviewImageProps } from "./InterviewImage.type"

export  function InterviewImage(props: InterviewImageProps) {
    const { interview } = props;

    const roleColors: Record < string, string> = {
        frontend: "bg-blue-600/20 border-blue-400/30 text-blue-200",
        backend: "bg-green-600/20 border-green-400/30 text-green-200",
        fullstack: "bg-yellow-600/20 border-yellow-400/30 text-yellow-200",
        mobile: "bg-purple-600/20 border-purple-400/30 text-purple-200",
        Devops: "bg-red-600/20 border-red-400/30 text-red-200",
        data: "bg-pink-600/20 border-gpink-400/30 text-pink-200",
        qa: "bg-rose-600/20 border-rose-400/30 text-rose-200",
        product_portfolio_strategy: "bg-indigo-600/20 border-indigo-400/30 text-indigo-200",


    };

   const roleInfo = roles.find((r) => r.value === interview.rol);
  return (
    <div className={`p-2 rounded-md border ${roleColors[interview.rol]}`}>
        <span className="text-3xl">{roleInfo?.icon}</span>
    </div>
  )
}  
