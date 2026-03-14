import { useParams } from 'react-router-dom'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import SocialSticky from '../Components/SocialIcon';
import AboutBg from "/assets/banner-bg.jpg";
import React, { useState, useEffect } from 'react';
import { 
  Heart, Star, CheckCircle, MapPin, Languages, GraduationCap,
  ThumbsUp, Archive, Calendar, Grid, List, Map, X, Building2
} from 'lucide-react';

// --- Types & Data ---
interface Doctor {
  id: number;
  name: string;
  specialities: string[]; // Array for multiple specialities
  clinics: string[];      // Array for multiple clinics
  degree: string;
  location: string;
  rating: number;
  available: boolean;
  languages: string[];
  likePercentage: string;
  votes: string;
  experience: number;
  fees: number;
  nextAvailable: string;
  image: string;
}

const ALL_DOCTORS: Doctor[] = [
  {
    id: 1,
    name: "Dr. Ashish Mahobia",
    specialities: ["Ophthalmology"],
    clinics: ["Sai Baba Eye Hospital"],
    degree: "MBBS, MS (Mumbai), FNB (Retina), MRCS (UK), EVRT (Germany)",
    location: "Raipur",
    rating: 4.8,
    available: true,
    languages: ["English"],
    likePercentage: "98%",
    votes: "252 / 287 Votes",
    experience: 20,
    fees: 600,
    nextAvailable: "10:00 AM - 15 Oct, Tue",
    image: "./assets/doctor/dr-one.png"
  },
  {
    id: 2,
    name: "Dr. Swati Mahobia",
    specialities: ["Gynecology"],
    clinics: ["Sai Baba Women's Hospital"],
    degree: "M.B.B.S, MD Obst & Gynec. (KEM & WADIA Hospital Mumbai)",
    location: "Raipur",
    rating: 4.3,
    available: false,
    languages: ["English"],
    likePercentage: "92%",
    votes: "270 / 300 Votes",
    experience: 30,
    fees: 450,
    nextAvailable: "11.00 AM - 19 Oct, Sat",
    image: "./assets/doctor/dr-two.png"
  },
  {
    id: 3,
    name: "Dr. Shamali Kohade",
    specialities: ["Ophthalmology"],
    clinics: ["Sai Baba Eye Hospital"],
    degree: "MBBS, MS (RIO, BHOPAL), Fellow in Glaucoma (LVPEI, Hyderabad)",
    location: "Raipur",
    rating: 4.7,
    available: true,
    languages: ["English"],
    likePercentage: "94%",
    votes: "268 / 312 Votes",
    experience: 15,
    fees: 700,
    nextAvailable: "10.30 AM - 29 Oct, Tue",
    image: "./assets/doctor/dr-three.png"
  },
  {
    id: 4,
    name: "Dr. Ashik R.",
    specialities: ["Ophthalmology"],
    clinics: ["Sai Baba Eye Hospital"],
    degree: "MD (AIIMS) Phaco & Oculoplasty Surgeon",
    location: "Raipur",
    rating: 4.7,
    available: true,
    languages: ["English"],
    likePercentage: "94%",
    votes: "268 / 312 Votes",
    experience: 15,
    fees: 700,
    nextAvailable: "10.30 AM - 29 Oct, Tue",
    image: "./assets/doctor/dr-four.png"
  },
  {
    id: 5,
    name: "Dr. Madhu Lata Pardeshi",
    specialities: ["Ophthalmology"],
    clinics: ["Sai Baba Eye Hospital"],
    degree: "MBBS, MS, Ex Glaucoma Fellow (Sankara Eye Hospital, Banglore)",
    location: "Raipur",
    rating: 4.7,
    available: false,
    languages: ["English"],
    likePercentage: "94%",
    votes: "268 / 312 Votes",
    experience: 15,
    fees: 700,
    nextAvailable: "10.30 AM - 29 Oct, Tue",
    image: "./assets/doctor/dr-five.png"
  },
  {
    id: 6,
    name: "Dr. Stuti Tiwari",
    specialities: ["Ophthalmology"],
    clinics: ["Sai Baba Eye Hospital"],
    degree: "MBBS, MS (Ophthalmology) Fellowship in Cornea & Referactive Surgery",
    location: "Raipur",
    rating: 4.7,
    available: true,
    languages: ["English"],
    likePercentage: "94%",
    votes: "268 / 312 Votes",
    experience: 15,
    fees: 700,
    nextAvailable: "10.30 AM - 29 Oct, Tue",
    image: "./assets/doctor/dr-six.png"
  },
  {
    id: 7,
    name: "Dr. Hemali Tekani Ruprela",
    specialities: ["Gynecology"],
    clinics: ["Sai Baba Women's Hospital"],
    degree: "MBBS, DGO, DNB, MNAMS, FMAS",
    location: "Raipur",
    rating: 4.7,
    available: true,
    languages: ["English"],
    likePercentage: "94%",
    votes: "268 / 312 Votes",
    experience: 15,
    fees: 700,
    nextAvailable: "10.30 AM - 29 Oct, Tue",
    image: "./assets/doctor/dr-seven.png"
  },
  {
    id: 8,
    name: "Dr. Neha Nupur Gupta",
    specialities: ["Gynecology"],
    clinics: ["Sai Baba Women's Hospital"],
    degree: "MBBS, MS, DNB, FMAS, CIMP",
    location: "Raipur",
    rating: 4.7,
    available: true,
    languages: ["English"],
    likePercentage: "94%",
    votes: "268 / 312 Votes",
    experience: 15,
    fees: 700,
    nextAvailable: "10.30 AM - 29 Oct, Tue",
    image: "./assets/doctor/dr-eight.png"
  },
  {
    id: 9,
    name: "Dr. Minakshi Mandhare",
    specialities: ["Gynecology"],
    clinics: ["Sai Baba Women's Hospital"],
    degree: "MBBS, DGO",
    location: "Raipur",
    rating: 4.7,
    available: true,
    languages: ["English"],
    likePercentage: "94%",
    votes: "268 / 312 Votes",
    experience: 15,
    fees: 700,
    nextAvailable: "10.30 AM - 29 Oct, Tue",
    image: "./assets/doctor/dr-nine.png"
  },
  {
    id: 10,
    name: "Dr. Richa Choubey",
    specialities: ["Gynecology"],
    clinics: ["Sai Baba Women's Hospital"],
    degree: "MBBS, MD Obs & Gynae. DMAS",
    location: "Raipur",
    rating: 4.7,
    available: true,
    languages: ["English"],
    likePercentage: "94%",
    votes: "268 / 312 Votes",
    experience: 15,
    fees: 700,
    nextAvailable: "10.30 AM - 29 Oct, Tue",
    image: "./assets/doctor/dr-ten.png"
  },
  {
    id: 11,
    name: "Dr. Jyoti Mishra",
    specialities: ["Gynecology", "Cosmetology"],
    clinics: ["Sai Baba Women's Hospital"],
    degree: "MBBS DDV (Cosmetologist)",
    location: "Raipur",
    rating: 4.7,
    available: true,
    languages: ["English"],
    likePercentage: "94%",
    votes: "268 / 312 Votes",
    experience: 15,
    fees: 700,
    nextAvailable: "10.30 AM - 29 Oct, Tue",
    image: "./assets/doctor/dr-eleven.png"
  }
];

const Doctors = () => {
// --- States ---
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(ALL_DOCTORS);
  const [selectedSpeciality, setSelectedSpeciality] = useState('');
  const [selectedClinic, setSelectedClinic] = useState('');
  const [isAvailableOnly, setIsAvailableOnly] = useState(false);

  // --- Filtering Logic ---
  useEffect(() => {
    let result = ALL_DOCTORS;

    if (selectedSpeciality) {
      // Check if the doctor has the selected speciality in their array
      result = result.filter(doc => doc.specialities.includes(selectedSpeciality));
    }

    if (selectedClinic) {
      // Check if the doctor works at the selected clinic in their array
      result = result.filter(doc => doc.clinics.includes(selectedClinic));
    }

    if (isAvailableOnly) {
      result = result.filter(doc => doc.available);
    }

    setFilteredDoctors(result);
  }, [selectedSpeciality, selectedClinic, isAvailableOnly]);

  // Extract unique values from arrays for dropdowns
  const uniqueSpecialities = Array.from(new Set(ALL_DOCTORS.flatMap(d => d.specialities))).sort();
  const uniqueClinics = Array.from(new Set(ALL_DOCTORS.flatMap(d => d.clinics))).sort();
  
  return (
    <>
    <SocialSticky />
    <Header/>

      <Breadcrumbs 
      items={[
        { label: "Our Doctors",
          bg: AboutBg
        }
        
      ]}
      />
    <div className="bg-slate-50 min-h-screen py-10 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h3 className="text-2xl font-bold text-slate-800">
            Showing <span className="text-blue-600">{filteredDoctors.length}</span> Doctors For You
          </h3>
          
          {/* <div className="flex items-center gap-2">
            <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-blue-600 transition-colors"><Grid size={18} /></button>
            <button className="p-2 bg-blue-600 text-white rounded-lg shadow-lg shadow-blue-100"><List size={18} /></button>
            <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-blue-600 transition-colors"><Map size={18} /></button>
          </div> */}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-full">
            
            {/* Functional Filters */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-2/3">
                {/* Speciality Selection */}
                <div className="relative">
                  <select 
                    value={selectedSpeciality}
                    onChange={(e) => setSelectedSpeciality(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none"
                  >
                    <option value="">All Specialities</option>
                      {uniqueSpecialities.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Clinic Selection */}
                <div className="relative">
                  <select 
                    value={selectedClinic}
                    onChange={(e) => setSelectedClinic(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none"
                  >
                    <option value="">All Clinics</option>
                    {uniqueClinics.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <button 
                onClick={() => { setSelectedSpeciality(''); setSelectedClinic(''); setIsAvailableOnly(false); }}
                className="flex items-center gap-2 text-slate-400 hover:text-red-500 font-bold text-sm px-4 py-2 transition-colors"
              >
                <X size={18} /> Clear All
              </button>
            </div>

            {/* Availability Toggle */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <p className="text-sm font-semibold text-slate-700">Availability</p>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={isAvailableOnly}
                    onChange={() => setIsAvailableOnly(!isAvailableOnly)}
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            {/* Results Grid/List */}
            <div className="grid grid-cols-1 gap-6">
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-72 h-64 md:h-auto relative overflow-hidden">
                      <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                        <Star size={14} className="text-orange-500" fill="currentColor" />
                        <span className="text-xs font-black">{doctor.rating}</span>
                      </div>
                    </div>

                    <div className="flex-1 p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {doctor.specialities.map(spec => (
                          <span key={spec} className="bg-blue-50 text-blue-700 text-[14px] font-bold px-2 py-1 rounded-md uppercase tracking-wider border border-blue-100">
                            {spec}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-3xl font-bold text-[#006EB7] flex items-center gap-2 group-hover:text-green-600 transition-colors">
                            {doctor.name} <CheckCircle size={22} className="text-green-500" />
                          </h4>
                           <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                              <p className="text-medium font-semibold text-slate-700 flex items-center gap-1"><GraduationCap size={20} className="text-slate-400" /> {doctor.degree}</p>
                          </div>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                            {doctor.clinics.map(clinic => (
                              <p key={clinic} className="text-slate-500 text-medium flex items-center gap-1">
                                <Building2 size={18} className="text-slate-400" /> {clinic}
                              </p>
                            ))}
                          </div>
                        </div>
                        <span className={`text-[15px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${doctor.available ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                          {doctor.available ? '● Active' : '○ Off-duty'}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6 my-6 border-y border-slate-200">
                        <div className="space-y-1">
                          <p className="text-[15px] text-slate-400 font-bold uppercase">Experience</p>
                          <p className="text-medium font-bold text-slate-700">{doctor.experience} Years</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[15px] text-slate-400 font-bold uppercase">Satisfaction</p>
                          <p className="text-medium font-bold text-slate-700">{doctor.likePercentage}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[15px] text-slate-400 font-bold uppercase">Location</p>
                          <p className="text-medium font-bold text-slate-700">{doctor.location}</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-between">
                            <div className="flex items-baseline gap-1">
                              {/* <span className="text-3xl font-black text-slate-900">${doctor.fees}</span>
                              <span className="text-slate-400 text-xs font-bold uppercase">/ Visit</span> */}
                            </div>
                            <a href='./book-appointment' className="flex-1 md:flex-none bg-green-600 hover:bg-slate-900 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-blue-200 active:scale-95 flex items-center justify-center gap-2">
                              <Calendar size={20} /> Book Appointment
                            </a>
                          </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Doctors