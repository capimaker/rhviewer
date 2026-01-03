import React from 'react'
import { howItWorksData } from './HowItWorks.data'

export function HowItWorks() {
  return (
    <section
      className='py-24 bg-linear-to-b from-blue-700/10 to-blue-900'
      id='how-it-works'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold md:text-4xl text-white mb-4'>
            How It Works
          </h2>
          <p className='text-xl text-slate-200 max-w-2xl mx-auto'>
            Get interview ready in just a few simple steps
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
          {howItWorksData.map((step, index) => (
            <div key={index} className='relative group'>
              <div className='bg-blue-950 border rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-400 hover:-translate-y-2'>
                <div className='flex items-center justify-center w-16 h-16 bg-linear-to-br from-primary/10 to-primary-glow/10 rounded-2xl mb-6 group-hover:scale-100 transition-transform'>
                  <step.icon className='w-8 h-8 text-primary-glow' />
                </div>
                <div className='text-white bg-blue-600 absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm'>
                  {index + 1}
                </div>
                <h3 className='text-xl font-semibold mb-3'>{step.title}</h3>
                <p className='text-slate-300 leading-relaxed'>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}