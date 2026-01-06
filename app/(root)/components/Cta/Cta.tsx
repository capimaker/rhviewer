import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Cta() {
  const stats = [
    { value: "10k+", label: "Developers Trained" },
    { value: "94%", label: "Success Rate" },
    { value: "500+", label: "Companies Hiring" },
  ]

  return (
    <section className="py-24 bg-linear-to-br from-blue-800/5 to-blue-600/5 " id="cta">
        <div className="container mx-auto px-4">
            <div className="max-w-4Sxl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Ace <br/> Your Next Interview?</h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Join thousands of successful candidates who have transformed their interview skills with RViewer. Start your journey today!
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="group" variant="secondary">
                        <Sparkles className="group-hover:rotate-12 transition-transform"/>
                        Start Free Trial
                        <ArrowRight className="group-hover:translate-x-1 transition-transform border-t border-border/50"/>
                    </Button>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {stats.map((item) => (
                        <div className="text-center" key={item.label}>
                            <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                            <div className="text-slate-200">{item.label}</div>
                        </div>
                    ))}

                </div>

            </div>

      
        </div>
    </section>
  )
}
