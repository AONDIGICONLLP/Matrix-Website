import React from 'react';
import { Users, Award, ShieldAlert, HeartHandshake } from 'lucide-react';

interface MetricItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export const CounterSection: React.FC = () => {
  const stats: MetricItem[] = [
    { value: "30+", label: "Years of Experience", icon: <Award className="w-6 h-6" /> },
    { value: "1,000+", label: "Satisfied Customers", icon: <HeartHandshake className="w-6 h-6" /> },
    { value: "70+", label: "Expert Staff Members", icon: <Users className="w-6 h-6" /> },
    { value: "100%", label: "Precision Accuracy", icon: <ShieldAlert className="w-6 h-6" /> },
  ];

  return (
    <section className="py-12 bg-blue-600 text-white relative overflow-hidden">
      {/* Decorative design nodes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2 flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-1 backdrop-blur-sm">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight">{stat.value}</div>
              <p className="text-xs md:text-sm text-blue-100 font-medium max-w-[150px] mx-auto leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;