import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: 'Is assisted living for me?', a: 'An otolaryngologist is a doctor who specializes in the diagnosis and treatment of ear, nose and throat diseases as well as related structures of the head and neck. Otolaryngologists are also referred to as ENT doctors or physicians.' },
    { q: 'Can you treat my relation with dementia & help with recovery?', a: 'Our specialist healthcare support network targets localized memory assistance patterns with customized safety measures.' },
    { q: 'Is there a doctor on the premises at all times?', a: 'Yes, certified physicians work concurrently via teleconsultation channels and rapid on-call local dynamic matching workflows.' },
    { q: 'How can we pay for long-term care plans?', a: 'We accept standard comprehensive medical coverages, continuous monthly processing systems, and direct structural claims.' }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Have any Questions?</h2>
          <p className="text-slate-500">Find quick details concerning our functional home operational procedures.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)} className="w-full p-5 text-left font-bold text-slate-900 hover:text-blue-600 transition flex justify-between items-center gap-4">
                <span>{faq.q}</span>
                <span className="text-xl text-slate-400">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-3 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}