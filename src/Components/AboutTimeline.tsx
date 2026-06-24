import React from 'react';
import { Calendar } from 'lucide-react';

interface TimelineItem {
  year: string;
  tagline: string;
  title: string;
  description: string;
}

export const AboutTimeline: React.FC = () => {
  const roadmap: TimelineItem[] = [
    {
      year: "1990", tagline: "Strategic Expansion",
      title: "Establishing a Presence",
      description: "Under the leadership of Mr. Vikram Gambhir, the business entered its next phase of growth, expanding operations and establishing a prominent presence in Naveen Market, Raipur."
    },
    {
      year: "2010", tagline: "A New Era",
      title: "Formation of Matrix Lifesciences",
      description: "On July 11, 2010, Matrix Lifesciences Private Limited was officially incorporated. Located in Tagore Nagar, Pachpedi Naka, Raipur, the company was built on a definitive corporate vision: \"Everything in Diagnostics.\""
    },
    {
      year: "2015", tagline: "Scaling Milestones",
      title: "Market Leadership & Team Growth",
      description: "Specializing in a comprehensive range of advanced diagnostic products and services, our team grew to 70 dedicated staff members across our Raipur. Our commitment to quality and service earned the trust of over 1,000 satisfied customers across Chhattisgarh."
    },
    {
      year: "Present Day", tagline: "Leadership & Continuity",
      title: "Sustained Excellence",
      description: "Today, Matrix Lifesciences is powered by a strategic blend of seasoned expertise and fresh perspectives. Led by foundational force Mr. Vikram Gambhir, the board has been continually strengthened by Mrs. Preeti Gambhir (joining in July 2018) and Ms. Varnika Gambhir (joining in January 2022). Together, our diverse leadership team drives the innovative decision-making and strategic planning necessary for sustained growth in the life sciences sector."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">Our Journey</h2>
          <p className="text-gray-500 mt-2">A timeline driven by unwavering professional parameters and consistent growth milestones</p>
        </div>

        <div className="relative border-l border-gray-200 max-w-4xl mx-auto pl-6 ml-4 md:mx-auto space-y-12">
          {roadmap.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Bullet Anchor */}
              <div className="absolute -left-10 top-1.5 w-7 h-7 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors z-10">
                <Calendar className="w-3.5 h-3.5 text-blue-600 group-hover:text-white transition-colors" />
              </div>

              {/* Box Content Cards */}
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {item.tagline}
                  </span>
                  <span className="text-lg font-extrabold text-gray-400 group-hover:text-blue-600 transition-colors">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default AboutTimeline