import React, { useState, useMemo } from 'react';
import { MapPin, Calendar, ChevronDown, ChevronUp, Search, X } from 'lucide-react';
import JobDetail from '../Components/CareerDetail';
import ApplyNowForm from '../Components/ApplyNowForm'; // Your previously created form
import Header from '../Components/Header'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/SocialIcon';
import AboutBg from "/assets/banner-bg.jpg";

interface Job {
  id: number;
  title: string;
  location: string;
  category: string;
  type: string;
  date: string;
  experience: string;
  qualification: string;
  note: string;
  link: string;
}

const CareerPage: React.FC = () => {
  const [view, setView] = useState<'list' | 'detail' | 'apply'>('list');
  // --- State ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(true);const [selectedJob, setSelectedJob] = useState<any>(null);


// --- Data ---
  const locations = ["Raipur", "Bilaspur", "Durg-Bhilai"];
  const categories = ["Medical", "Administration", "Emergency", "Critical Care", "Call Centre"];

  const jobs: Job[] = [
{ 
      id: 331, 
      title: "CEO (Chief Executive Officer)", 
      location: "Raipur", 
      category: "Administration", 
      type: "Full Time", 
      date: "02-02-2026", 
      experience: "12 to 15+ years", 
      qualification: "",
      note: "Only male candidates preferred", 
      link: "mailto:hr@sbhhospital.com" 
    },
    { 
      id: 332, 
      title: "Pharmacist (Female)", 
      location: "Raipur", 
      category: "Medical", 
      type: "Full Time", 
      date: "02-02-2026", 
      experience: "2+ years", 
      qualification: "B Pharmacy", 
      note: "",
      link: "mailto:hr@sbhhospital.com" 
    },
    { 
      id: 333, 
      title: "Manager - Marketing (IVF Unit)", 
      location: "Raipur", 
      category: "Marketing", 
      type: "Full Time", 
      date: "02-02-2026", 
      experience: "8+ years in IVF marketing", 
      qualification: "Graduation & above", 
      note: "",
      link: "mailto:hr@sbhhospital.com" 
    },
    { 
      id: 334, 
      title: "Manager - Marketing (Eye Unit)", 
      location: "Raipur", 
      category: "Marketing", 
      type: "Full Time", 
      date: "02-02-2026", 
      experience: "8+ years in Health care marketing", 
      qualification: "Graduation & above", 
      note: "",
      link: "mailto:hr@sbhhospital.com" 
    },
    { 
      id: 335, 
      title: "Female Counselor (OBS & Gyneac Unit)", 
      location: "Raipur", 
      category: "Medical", 
      type: "Full Time", 
      date: "02-02-2026", 
      experience: "3+ years from Hospital industry", 
      qualification: "Graduation & above",
      note: "", 
      link: "mailto:hr@sbhhospital.com" 
    }
  ];

// --- Logic: Multi-Filter System ---
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(job.location);
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(job.category);
      return matchesSearch && matchesLocation && matchesCategory;
    });
  }, [searchQuery, selectedLocations, selectedCategories]);

  const toggleFilter = (list: string[], item: string, setter: (val: string[]) => void) => {
    setter(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
  };

  const openDetail = (job: any) => {
    setSelectedJob(job);
    setView('detail');
    window.scrollTo(0,0);
  };

  return (

     <>
    <SocialSticky />
    <Header/>
      <Breadcrumbs 
      items={[
        { label: "About Us", 
          bg: AboutBg
        }
      ]}
      />
    <div className="min-h-screen bg-slate-50 py-6">
      {/* 1. GRID VIEW */}
      {view === 'list' && (
        <div className="max-w-7xl mx-auto">

        {/* Global Search & Active Tags */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search by job title (e.g. 'Nursing')..."
              className="w-full pl-12 pr-4 py-3 bg-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {[...selectedLocations, ...selectedCategories].map(tag => (
              <span key={tag} className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                {tag} <X size={14} className="cursor-pointer" onClick={() => {
                  if (selectedLocations.includes(tag)) toggleFilter(selectedLocations, tag, setSelectedLocations);
                  else toggleFilter(selectedCategories, tag, setSelectedCategories);
                }} />
              </span>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">Career Opportunities with <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> SBH Hospital </span></h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-6">
              <h3 className="text-lg font-bold mb-4 flex justify-between items-center">
                Filters
                <button onClick={() => {setSelectedLocations([]); setSelectedCategories([]); setSearchQuery('')}} className="text-xs text-blue-600 font-medium">Reset</button>
              </h3>

              {/* Location Filter */}
              <div className="mb-6">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Location</p>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {locations.map(loc => (
                    <label key={loc} className="flex items-center group cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        checked={selectedLocations.includes(loc)}
                        onChange={() => toggleFilter(selectedLocations, loc, setSelectedLocations)}
                      />
                      <span className="ml-3 text-sm text-slate-600 group-hover:text-blue-600 transition">{loc}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Department</p>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center group cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleFilter(selectedCategories, cat, setSelectedCategories)}
                      />
                      <span className="ml-3 text-sm text-slate-600 group-hover:text-blue-600 transition">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Jobs Grid (3 Columns) */}
          <main className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-slate-500 font-medium">{filteredJobs.length} Positions Found</p>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-md inline-block mb-4">
                        {job.category}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight h-14 overflow-hidden">
                        {job.title}
                      </h3>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-slate-500 text-sm gap-2">
                          <MapPin size={16} className="text-red-400" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-slate-400 text-sm gap-2">
                          <Calendar size={16} />
                          Posted on {job.date}
                        </div>
                      </div>
                    </div>
                    <a 
                      onClick={() => openDetail(job)}
                      className="w-full text-center py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                      View Details
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                <p className="text-slate-400 font-medium">No jobs match your selected filters.</p>
                <button onClick={() => {setSelectedLocations([]); setSelectedCategories([]); setSearchQuery('')}} className="mt-4 text-blue-600 font-bold">Clear All Filters</button>
              </div>
            )}

            {/* {filteredJobs.length > 0 && (
              <button className="w-full mt-10 py-4 bg-white border-2 border-slate-200 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition">
                Load More Opportunities
              </button>
            )} */}
          </main>

        </div>
      </div>
      )}

      {/* 2. DETAIL VIEW */}
      {view === 'detail' && selectedJob && (
        <JobDetail 
          job={selectedJob} 
          onBack={() => setView('list')} 
          onApply={() => setView('apply')} 
        />
      )}

      {/* 3. APPLY FORM VIEW */}
      {view === 'apply' && selectedJob && (
        <div className="py-12 px-4">
          <button 
            onClick={() => setView('detail')} 
            className="max-w-4xl mx-auto block mb-6 text-blue-600 font-bold"
          >
            ← Back to Job Description
          </button>
          <ApplyNowForm 
            jobTitle={selectedJob.title} 
            jobId={selectedJob.id} 
            location={selectedJob.location} 
          />
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default CareerPage;