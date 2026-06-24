import React from 'react';

export default function FeaturesIncluded() {
  const inclusions = [
    'Emergency support structures',
    'In-person care manager check-ins',
    'Complete customized healthcare support',
    'Flexible Home Care routines (as needed)',
    'Strict Safety & Security compliance protocols',
    'Social & emotional engagement assistance',
    'Integrated Physiotherapy/Counselor options'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Graphics segment */}
        <div className="bg-slate-100 border border-slate-200 rounded-3xl aspect-video sm:aspect-[16/10] flex items-center justify-center font-mono text-xs text-slate-400">
          [ Full Plan Features Graphic Representation ]
        </div>

        {/* Right checklist metadata text block */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What's included in our Plan</h2>
          <p className="text-slate-500">Every deployment tier provides structured guarantees for safety and recovery monitoring metrics.</p>
          
          <ul className="grid gap-3 sm:grid-cols-2">
            {inclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}