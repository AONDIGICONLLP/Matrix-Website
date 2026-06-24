import React from 'react';

export default function NearbyNurses() {
  const nearby = [
    { name: 'Elizabeth Penelope', exp: '7+ Years Experience', location: 'United States', rating: '98%', patients: '1856 Patients', distance: '700 m' },
    { name: 'Dorothy Joanne', exp: '5+ Years Experience', location: 'United Kingdom', rating: '97%', patients: '2589 Patients', distance: '2.5 km' },
    { name: 'Rachel Sophie', exp: '8+ Years Experience', location: 'United States', rating: '91%', patients: '5478 Patients', distance: '900 m' },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Nearby Nurses Available</h2>
          <p className="text-slate-500">Quick-response emergency and standard home caretakers mapped closest to your location coordinates.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {nearby.map((nurse, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4 hover:shadow-md transition">
              <div className="h-16 w-16 bg-slate-100 rounded-xl shrink-0 flex items-center justify-center text-xl">👩‍⚕️</div>
              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-slate-900 text-sm truncate">{nurse.name}</h3>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full shrink-0">{nurse.distance} away</span>
                </div>
                <p className="text-xs text-slate-400">{nurse.exp}</p>
                <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-1">
                  <span>⭐ {nurse.rating}</span>
                  <span>•</span>
                  <span>{nurse.patients}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}