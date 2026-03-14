import React from 'react';
import { Hospital, MapPin, Calendar, Search } from 'lucide-react';

const DoctorSearchBox: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-30">
      {/* Outer Pill Container with Gradient Border Effect */}
      <div className="p-1.5 bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 rounded-full shadow-2xl">
        
        {/* Inner Search Box */}
        <div className="bg-white rounded-full p-2 lg:p-3">
          <form className="flex flex-col lg:flex-row items-center justify-between gap-y-4 lg:gap-y-0">
            
            {/* 1. Doctor/Hospital Search */}
            <div className="flex items-center gap-3 px-6 w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0">
              <Hospital className="text-teal-500 shrink-0" size={20} />
              <input 
                type="text" 
                className="w-full bg-transparent focus:outline-none text-slate-700 placeholder:text-slate-400 text-sm"
                placeholder="Search Doctors, Hospitals, Clinics" 
              />
            </div>

            {/* 2. Location Search */}
            <div className="flex items-center gap-3 px-6 w-full lg:w-1/4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0">
              <MapPin className="text-teal-500 shrink-0" size={20} />
              <input 
                type="text" 
                className="w-full bg-transparent focus:outline-none text-slate-700 placeholder:text-slate-400 text-sm"
                placeholder="Location" 
              />
            </div>

            {/* 3. Date Picker Search */}
            <div className="flex items-center gap-3 px-6 w-full lg:w-1/4 pb-4 lg:pb-0">
              <Calendar className="text-teal-500 shrink-0" size={20} />
              <input 
                type="text" 
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="w-full bg-transparent focus:outline-none text-slate-700 placeholder:text-slate-400 text-sm"
                placeholder="Date" 
              />
            </div>

            {/* 4. Search Button */}
            <div className="w-full lg:w-auto px-2">
              <button 
                type="submit" 
                className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:brightness-110 transition-all active:scale-95"
              >
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>

          </form>
        </div>
      </div>
      
      {/* Quick Links / Suggestions */}
      <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-500">
        <span>Common:</span>
        <button className="hover:text-teal-600 transition-colors">Pediatrics</button>
        <button className="hover:text-teal-600 transition-colors">Dental</button>
        <button className="hover:text-teal-600 transition-colors">IVF Support</button>
      </div>
    </div>
  );
};

export default DoctorSearchBox;