import React, { useState,type ChangeEvent,type  FormEvent } from 'react';
import { Send, FileText, User, MapPin, Briefcase, Phone, Mail, GraduationCap, Clock } from 'lucide-react';

interface ApplicationFormProps {
  jobTitle?: string;
  jobId?: string;
  location?: string;
}

const ApplyNowForm: React.FC<ApplicationFormProps> = ({ 
  jobTitle = "Medical Superintendent", 
  jobId = "331", 
  location = "Sangamner" 
}) => {
  const [formData, setFormData] = useState({
    fname: '',
    gender: 'Female',
    currentLocation: '',
    address: '',
    currentCompany: '',
    currentDesignation: '',
    currentCTC: '',
    contactNo: '',
    maritalStatus: 'none',
    email: '',
    qualification: '',
    noticePeriod: '',
  });

  const [resume, setResume] = useState<File | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", { ...formData, resume, jobTitle, jobId });
    alert("Application submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="bg-blue-900 p-6">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <FileText className="text-blue-300" />
          Enter Details
        </h3>
        <p className="text-blue-200 text-sm mt-1">Please fill in the information below to apply.</p>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Read-Only Position Info */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Position</label>
            <input 
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-500 font-medium cursor-not-allowed"
              type="text" 
              value={`${jobTitle} (${location})`} 
              readOnly 
            />
          </div>

          {/* First Name */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">First Name *</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                name="fname"
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="John Doe"
                type="text" 
                required 
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Gender */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Gender *</label>
            <div className="flex gap-4 py-2">
              {['Female', 'Male', 'Other'].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="gender" 
                    value={option}
                    checked={formData.gender === option}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span className="text-sm text-slate-600 group-hover:text-blue-600">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Current Location */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Current Location *</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                name="currentLocation"
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="City, State"
                type="text" 
                required 
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Company & Designation */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Current Company *</label>
            <input 
              name="currentCompany"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Full Company Name"
              type="text" 
              required 
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Current Designation *</label>
            <input 
              name="currentDesignation"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g. Senior Manager"
              type="text" 
              required 
              onChange={handleInputChange}
            />
          </div>

          {/* CTC & Notice Period */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Current CTC (per Month) *</label>
            <input 
              name="currentCTC"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g. 50,000"
              type="text" 
              required 
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Notice Period *</label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                name="noticePeriod"
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="e.g. 30 Days"
                type="text" 
                required 
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Contact & Email */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Contact No *</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                name="contactNo"
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="10 digit mobile number"
                type="tel" 
                pattern="[6789][0-9]{9}" 
                maxLength={10}
                required 
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Email Address *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                name="email"
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="email@example.com"
                type="email" 
                required 
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Marital Status & Qualification */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Marital Status *</label>
            <select 
              name="maritalStatus"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              required
              onChange={handleInputChange}
            >
              <option value="none">Select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Separated">Separated</option>
              <option value="Widow">Widow</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Highest Qualification *</label>
            <div className="relative">
              <GraduationCap className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                name="qualification"
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="e.g. MBA, MBBS"
                type="text" 
                required 
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Resume Upload - Full Width */}
          <div className="md:col-span-2 space-y-1">
            <label className="text-sm font-semibold text-slate-700">Attach Your Resume (PDF/Doc) *</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 border-dashed rounded-2xl hover:border-blue-400 transition-colors bg-slate-50">
              <div className="space-y-1 text-center">
                <FileText className="mx-auto h-12 w-12 text-slate-400" />
                <div className="flex text-sm text-slate-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                    <span>Upload a file</span>
                    <input type="file" name="resume" className="sr-only" required onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-slate-500">PDF, DOC up to 5MB</p>
                {resume && <p className="text-sm text-green-600 font-bold mt-2">Selected: {resume.name}</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg flex justify-center items-center gap-2 hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200"
          >
            Submit Application <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyNowForm;