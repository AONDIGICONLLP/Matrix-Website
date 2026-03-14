import React from 'react';
import { MapPin, Calendar, Clock, Briefcase, ChevronLeft, Share2, ShieldCheck } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  location: string;
  category: string;
  date: string;
  experience: string;
  type: string;
  description: string;
}

interface DetailProps {
  job: Job;
  onBack: () => void;
  onApply: () => void;
}

const JobDetail: React.FC<DetailProps> = ({ job, onBack, onApply }) => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 animate-in fade-in duration-500">
      {/* Top Navigation */}
      <button onClick={onBack} className="flex items-center text-blue-600 font-semibold mb-6 hover:gap-2 transition-all">
        <ChevronLeft size={20} /> Back to Listings
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Job Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {job.category}
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {job.type}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-6">{job.title}</h1>
            
            <div className="prose prose-slate max-w-none">
              {/* <h3 className="text-xl font-bold text-slate-800 mb-4">Job Description</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{job.description}</p> */}
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">Key Responsibilities</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Manage and supervise clinical and administrative staff.</li>
                <li>Ensure the highest quality of patient care and safety.</li>
                <li>Develop and implement hospital policies and procedures.</li>
                <li>Maintain compliance with healthcare laws and regulations.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar Action Card */}
        <aside className="lg:col-span-1">
          <div className="bg-blue-900 text-white rounded-3xl p-6 sticky top-8 shadow-xl">
            <h3 className="text-xl font-bold mb-6 border-b border-blue-800 pb-4">Job Summary</h3>
            
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-300 mt-1" size={20} />
                <div><p className="text-blue-200 text-xs">Location</p><p className="font-medium">{job.location}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="text-blue-300 mt-1" size={20} />
                <div><p className="text-blue-200 text-xs">Experience Required</p><p className="font-medium">{job.experience}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-blue-300 mt-1" size={20} />
                <div><p className="text-blue-200 text-xs">Job Type</p><p className="font-medium">{job.type}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="text-blue-300 mt-1" size={20} />
                <div><p className="text-blue-200 text-xs">Posted Date</p><p className="font-medium">{job.date}</p></div>
              </div>
            </div>

            <button 
              onClick={onApply}
              className="w-full mt-8 bg-white text-blue-900 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Apply for this Position
            </button>
            
            {/* <div className="mt-6 pt-6 border-t border-blue-800 flex justify-between items-center text-sm text-blue-300">
              <span className="flex items-center gap-1"><ShieldCheck size={16} /> Verified Job</span>
              <button className="hover:text-white transition-colors"><Share2 size={18} /></button>
            </div> */}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default JobDetail;