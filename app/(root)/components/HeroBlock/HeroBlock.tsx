'use client';

import { TypeAnimation } from "react-type-animation";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export function HeroBlock() {
  return <section className="min-h-screen flex flex-col justify-center items-center">
    <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-6xl front-extrabold mb-6 tracking-tight text-center flex gap-2 flex-col items-center">Practice real interviews with
            <span className="inline-block bg-indigo-500 text-white shadow-[0_0_20px_#6366f1] px-6 py-2 rounded-xl">  AI <Sparkles className="inline-block w-8 h-8 mb-1 animate-pulse" /></span>
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 text-white-600/80">
            <TypeAnimation
                sequence={[ 'Get ready for your dream job.', 2000, 'Ace your interviews with confidence.', 2000, 'Practice makes perfect.', 2000 ]}
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
            />
        </p>

        <div className="flex items-center justify-center pb-5">
            <Button className="bg-violet-600 hover:bg-indigo-700 text-white shadow-lg transition duration-300 px-20 py-6 text-lg rounded-lg font-semibold ease-in-out " asChild>
                <Link href="/dashboard">
                <Sparkles className="group-hover:rotate-12 transition-transform" />
                Get Started
                </Link>
                </Button>
           {/* <Button size="lg" variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">Learn More</Button>*/}
        </div>
        <div className="flex items-center gap-8 text-sm text-slate-200 justify-center">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"/>
                5+ Interview Types
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"/>
                No credit card required
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"/>
                Instant feedback

            </div>
        </div>
    </div>
  </section>
}
