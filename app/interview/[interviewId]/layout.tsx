import React from 'react'

export default function InterviewLayout({ children}: { children: React.ReactNode}) {
  return (
    <div className='w-full min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900'>
        <main className='w-full h-screen'>{children}</main>
    </div>
  )
}