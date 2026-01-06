import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
 // DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, Headset } from "lucide-react"
import { FormCreateInterview } from "./FormCreateInterview"
export  function BtnCreateInterview() {
  return (
    <Dialog>
  <DialogTrigger asChild>
    <Button className="bg-linear-to-r from-blue-600 to-purple-600 font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"> Create Interview</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="flex gap-2 items-center text-sky-400">Start Interview <Headset/> </DialogTitle>
      <FormCreateInterview />
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}
