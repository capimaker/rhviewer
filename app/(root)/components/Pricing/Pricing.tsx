import { pricingPlans } from "./Pricing.data";
import { Button } from "@/components/ui/button";
import {  Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { div } from "framer-motion/client";
import { Check, Sparkles } from "lucide-react"; 
import Link from "next/link";


export  function Pricing() {
  return <section className='py-24 bg-linear-to-b from-blue-700/10 to-blue-900' id="pricing">
    
    <div className='container mx-auto max-w-3xl'>
        <div className='text-center mb-16'>
            <h2 className='text-3xl font-extrabold md:text-4xl'>Pricing Plans</h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">Start free, upgrade when you are ready to ace every interview</p>

        </div>
        <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative group hover:shadow-xl transition-all duration-300 border-0 px-2 py-6 ${plan.popular ? " rounded-md border bg-blue-900/70 border-blue-400/30 text-blue-200" : "p-2 rounded-md bg-blue-600/20 border-blue-400/30 text-blue-200"}`}>
                    {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 ">
                            <span className="bg-white text-blue-800 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
                                Most Popular
                                <Sparkles className=" w-4 h-4" />
                            </span>
                        </div>
                    ) }
                    <CardHeader className="text-center pb-4"> 
                        <CardTitle className="text-2xl font-bold">
                            {plan.name}
                        </CardTitle>
                        <div className=" mt-4">
                            <span className="text-5xl font-bold">
                                ${plan.price}
                            </span>
                            <p>{plan.description} </p>

                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6"> 
                        <ul className="space-y-3"> 
                            {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-esmerald-400 flex shrink-0" />
                                    <span className="text-sm">{feature}</span>
                                </li>
                            ))}
                            </ul>
                        <Button size="lg" className={`w-full font-semibold mt-4 ${plan.popular ? "bg-teal-500 hover:bg-teal-200 text-white shadow-md border border-teal-100/70" : "bg-blue-500 hover:bg-blue-300 text-white shadow-md border border-blue-300/50"}`}>
                            <Link href="/signup">{plan.buttonText}</Link>
                        </Button>

                    </CardContent>


                    
                </Card>
            ))}
        </div>
    </div>

  </section>
}
