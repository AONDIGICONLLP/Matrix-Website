import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data Dispatched:", formData);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">GET IN TOUCH</h2>
          <p className="text-gray-500 mt-2">Have a question? We’re here to help! Reach out to our team using the details below.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Info Details blocks */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location Card */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex gap-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Our Office</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Matrix Heights, Plot No. C-149/1<br />
                  Tagore Nagar, Near Pachpedi Naka,<br />
                  Raipur, 492001, CG.
                </p>
                <a href="#map" className="inline-block text-xs font-bold text-blue-600 mt-2 hover:underline">
                  CHECK LOCATION &rarr;
                </a>
              </div>
            </div>

            {/* Call Center Card */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex gap-4">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                <p className="text-sm text-gray-600 font-semibold">+91 7714920492</p>
                <p className="text-sm text-gray-600 font-semibold">+91 7714920592</p>
                <div className="flex items-center space-x-1.5 text-xs text-gray-400 mt-1">
                  <Clock className="w-3 h-3" />
                  <span>Monday – Saturday | 10:00 AM to 7:30 PM</span>
                </div>
                <button className="inline-block text-xs font-bold text-emerald-600 mt-2 hover:underline bg-transparent border-none cursor-pointer">
                  GET CALL BACK &rarr;
                </button>
              </div>
            </div>

            {/* Email Support Card */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex gap-4">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                <p className="text-sm text-blue-600 font-medium select-all">info@matrixlpl.com</p>
                <p className="text-xs text-gray-400 mt-1">Drop us an email, and our technical support team will respond within 24 business hours.</p>
                <a href="#form-block" className="inline-block text-xs font-bold text-purple-600 mt-2 hover:underline">
                  CONTACT FORM &rarr;
                </a>
              </div>
            </div>

          </div>

          {/* Form Interactive Block */}
          <div id="form-block" className="lg:col-span-7 bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">SEND A MESSAGE</h3>
            <p className="text-sm text-gray-500 mb-6">Drop us a line & get a swift reply from our team!</p>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                <input 
                  type="text" name="name" value={formData.name} onChange={handleInputChange} required
                  className="w-full bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                <input 
                  type="email" name="email" value={formData.email} onChange={handleInputChange} required
                  className="w-full bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message Detail</label>
                <textarea 
                  name="message" value={formData.message} onChange={handleInputChange} rows={4} required
                  className="w-full bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your requirement or system query..."
                ></textarea>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-md">
                <Send className="w-4 h-4" />
                <span>Submit Form</span>
              </button>
            </form>
          </div>

        </div>

        {/* Embedded Map Visual Container */}
        <div id="map" className="mt-16 rounded-2xl overflow-hidden border border-gray-200 h-96 w-full shadow-md bg-gray-100">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d119023.61317936289!2d81.6784184!3d21.212492400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a28dd787783e8bf%3A0xe5118fa677709104!2sMatrix%20Lifesciences%20Private%20Limited%2C%20Plot%20No.C-149%2F1%2C%20Matrix%20Heights%2C%20Tagore%20Nagar%20Main%20Rd%2C%20near%20Pachpedi%20Naka%2C%20Raipur%2C%20Chhattisgarh%20492001!3m2!1d21.2219832!2d81.6507561!5e0!3m2!1sen!2sin!4v1781856199084!5m2!1sen!2sin" 
            className="w-full h-full"
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Matrix Raipur Headquarters Location Map"
        />
        </div>
      </div>
    </section>
  );
};

export default ContactUs