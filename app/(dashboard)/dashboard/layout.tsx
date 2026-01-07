import React from 'react'
import { Metadata } from 'next'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from './components'
import { SignedIn, UserButton } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'Dashboard - RViewer',
  description: 'Your personalized dashboard to track progress and access resources.',
}
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900'>
     <SidebarProvider>
       <AppSidebar />
        <main className='w-full min-h-screen p-6'>
           <div className='flex justify-between'>
            <SidebarTrigger className='text-white'/>
             <SignedIn>
                 <UserButton />
             </SignedIn>
           </div>

        {children}
        </main>
    </SidebarProvider>
        </div>
  )
}
