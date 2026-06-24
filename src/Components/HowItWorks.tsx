import React from 'react';

export default function HowItWorks() {
  const steps = [
    { id: '01', title: 'Location', desc: 'Enter your custom residency area parameters.' },
    { id: '02', title: 'Booking', desc: 'Select targeted calendar windows matching schedules.' },
    { id: '03', title: 'Caregiver', desc: 'Review fully matched, trusted professional nurses.' },
    { id: '04', title: 'Takecare', desc: 'Sit back while customized operations manage health.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How It Works & Booking</h2>
          <p className="text-slate-500">Getting personalized in-home support involves just four simple, dynamic steps.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step) => (
            <div key={step.id} className="relative group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition duration-300">
              <div className="absolute top-4 right-4 text-4xl font-black text-slate-200/60 font-mono tracking-tighter group-hover:text-blue-100 transition">
                {step.id}
              </div>
              <div className="h-12 w-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold mb-6">
                {step.id}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}