import { Badge } from "@/components/ui/badge";

export  function StatusFreeTrial() {
  return (
    <div className="p-4 bg-purple-600/20 border-white rounded-md">
        <h3 className="font-semibold text-xl mb-2 text-center">Free trial available</h3>
        <Badge variant="outline" className="w-full bg-purple-600 py-1"> Upgrade Now</Badge>
        </div>
  )
}
