import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';

interface CountItemProps {
  end: number;
  suffix: string;
  label: string;
  hoverBorder: string;
}

const CountItem = ({ end, suffix, label, hoverBorder }: CountItemProps) => {
  const [displayCount, setDisplayCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration: 5,
        ease: "easeOut",
        onUpdate: (value) => setDisplayCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, end]);

  return (
    <div
      ref={ref}
      className="group text-center relative p-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50"
    >
      <h4 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
        <span>{displayCount}</span>{suffix}
      </h4>
      <p className="text-gray-600 font-medium text-sm md:text-base tracking-wide">
        {label}
      </p>
      {/* Dynamic Hover Border */}
      <div className={`absolute bottom-0 left-0 w-full h-1 border-b-4 border-transparent rounded-b-xl transition-colors duration-300 ${hoverBorder}`} />
    </div>
  );
};

const TestimonialCounter: React.FC = () => {
  const counterData = [
    { count: 100000, suffix: "+", label: "Cataract Surgeries",  hoverBorder: "group-hover:border-emerald-500" },
    { count: 500, suffix: "+", label: "LASIK Procedures", hoverBorder: "group-hover:border-blue-500" },
    { count: 500, suffix: "+", label: "IVF Success Stories", hoverBorder: "group-hover:border-purple-500" },
    { count: 25, suffix: "K+", label: "Safe Deliveries", hoverBorder: "group-hover:border-pink-500" },
    { count: 2300, suffix: "+", label: "Health Camps", hoverBorder: "group-hover:border-orange-500" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {counterData.map((item, index) => (
        <CountItem 
            key={index}
            end={item.count}
            suffix={item.suffix}
            label={item.label}
            hoverBorder={item.hoverBorder}
        />
        ))}
    </div>
  );
};

export default TestimonialCounter;