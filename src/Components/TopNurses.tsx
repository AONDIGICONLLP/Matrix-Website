import React from 'react';

export default function TopNurses() {
  const topNurses = [
    { name: 'Carolyn', exp: '7+ Years Experience', location: 'United States', rating: '94%', patients: '1756 Patients', rate: '$120/ day' },
    { name: 'Jasmine Madeleine', exp: '10+ Years Experience', location: 'United States', rating: '98%', patients: '1856 Patients', rate: '$100/ day' },
    { name: 'Samantha Tracey', exp: '15+ Years Experience', location: 'United Kingdom', rating: '95%', patients: '1156 Patients', rate: '$150/ day' },
    { name: 'Elizabeth Penelope', exp: '7+ Years Experience', location: 'United States', rating: '98%', patients: '1856 Patients', rate: '$140/ day' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Top Rated Nurses</h2>
          <p className="text-slate-500">Highly qualified clinical experts vetted for immediate custom assignment routines.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {topNurses.map((nurse, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col">
              {/* Profile image placeholder container */}
              <div className="h-48 bg-slate-100 flex items-center justify-center font-mono text-xs text-slate-400 border-b border-slate-100">
                [ Nurse Avatar Layout ]
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">{nurse.exp}</span>
                  <h3 className="font-bold text-slate-900 text-lg mt-2">{nurse.name}</h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">📍 {nurse.location}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-100 text-xs text-slate-600">
                  <div>⭐ <span className="font-bold text-slate-900">{nurse.rating}</span> Satisfied</div>
                  <div>👥 <span className="font-bold text-slate-900">{nurse.patients.split(' ')[0]}</span> Care visits</div>
                </div>
                <div className="flex items-center justify-between gap-2 pt-1">
                  <div>
                    <span className="text-lg font-black text-slate-900">{nurse.rate.split('/')[0]}</span>
                    <span className="text-xs text-slate-400">/day</span>
                  </div>
                  <button className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 shadow-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}