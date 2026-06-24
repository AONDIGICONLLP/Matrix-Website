import React from 'react';
import { Mail, Phone, User, Briefcase } from 'lucide-react';

interface Executive {
  name: string;
  role: string;
  phone: string;
  email: string;
  tenure: string;
  experience: string;
}

export const CorporateTeam: React.FC = () => {
  const executives: Executive[] = [
    {
      name: "Mr. Chetan Wadher", role: "General Manager (Institutional Business)",
      phone: "9826124489", email: "chetan.wadher@matrixlpl.com",
      tenure: "Associated with Matrix since 2002.", experience: "27 Years"
    },
    {
      name: "Mr. Subhajeet Sengupta", role: "General Manager (Trade Business)",
      phone: "9826144656", email: "subhajeet.sengupta@matrixlpl.com",
      tenure: "Associated with Matrix since 2002.", experience: "28 Years"
    },
    {
      name: "Mr. N. R. Sahu", role: "Senior Sales & Marketing Manager (Trade Business)",
      phone: "9522202853", email: "netram.sahu@matrixlpl.com",
      tenure: "Associated with Matrix since 1990.", experience: "35 Years"
    },
    {
      name: "Mr. Shrinivas Solanki", role: "Senior Sales & Marketing Manager (Trade Business)",
      phone: "9522202851", email: "shrinivas.solanki@matrixlpl.com",
      tenure: "Associated with Matrix since 2014.", experience: "18 Years"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs uppercase font-bold tracking-widest text-blue-600">Our Team</h2>
          <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">OUR TEAM OF EXPERTS</h3>
          <p className="text-gray-600 leading-relaxed">
            Matrix team consists of seasoned professionals who are deeply passionate about their work, 
            highly accomplished in their respective fields, and bring a wealth of diverse experiences. 
            With a broad range of expertise, our team is equipped to provide comprehensive solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {executives.map((person, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              
              <div>
                {/* Visual Avatar Placeholder Box */}
                <div className="w-full aspect-square bg-gray-200/60 rounded-xl mb-4 flex items-center justify-center text-gray-400">
                  <User className="w-12 h-12" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg leading-tight mb-1">{person.name}</h4>
                <p className="text-xs text-blue-600 font-semibold mb-4 tracking-wide">{person.role}</p>
                
                <div className="space-y-2 border-t border-gray-200/60 pt-4 text-xs text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                    <span>Exp: <strong className="text-gray-800">{person.experience}</strong></span>
                  </div>
                  <p className="text-gray-500 italic">{person.tenure}</p>
                </div>
              </div>

              {/* Action Communications Anchor Links */}
              <div className="grid grid-cols-2 gap-2 mt-4 border-t border-gray-200/60 pt-4">
                <a href={`tel:${person.phone}`} className="flex items-center justify-center gap-1.5 py-2 bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 border border-gray-200 rounded-lg text-xs font-medium transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
                <a href={`mailto:${person.email}`} className="flex items-center justify-center gap-1.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CorporateTeam