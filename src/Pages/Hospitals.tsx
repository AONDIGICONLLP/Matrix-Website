import Header from '../Components/Header'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import SocialSticky from '../Components/SocialIcon';
import AboutBg from "/assets/banner-bg.jpg";
import {  MdFemale } from 'react-icons/md';
import { FaBullseye } from 'react-icons/fa6';


const Hospitals = () => {
return(
    <>
    <SocialSticky />
    <Header/>
      <Breadcrumbs 
      items={[
        { label: "Hospitals", 
          bg: AboutBg
        }
      ]}
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 pb-12 font-sans text-slate-800">
            {/* 2. Eye Hospital - 2036 Goals */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
                <div className="w-full md:w-1/2">
                    <img 
                    src="./assets/about/sbh-eye.jpg" 
                    alt="Eye Care Equipment" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-2 text-green-600 font-bold uppercase tracking-wider text-sm mb-2">
                    <FaBullseye /> Strategic Goal 2036
                    </div>
                    <h3 className="text-3xl font-bold mb-4">SBH EYE HOSPITAL PVT. LTD.</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                    By 2036, SBH will be one of the top 5 eye hospitals of Central India with a Global fame. 
                    We will be seeing 7 lacs patients and operating upon 70,000 patients yearly.
                    </p>
                    <div className="flex gap-8">
                    <div>
                        <p className="text-2xl font-bold text-blue-600">7 Lacs</p>
                        <p className="text-sm text-slate-500">Yearly Patients</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-blue-600">70,000</p>
                        <p className="text-sm text-slate-500">Annual Surgeries</p>
                    </div>
                    </div>
                </div>
            </div>
        
            {/* 3. Women Hospital - 2035 Goals */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                <div className="w-full md:w-1/2">
                    <img 
                    src="./assets/about/sbh-women.jpg" 
                    alt="Women Care" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-2 text-rose-600 font-bold uppercase tracking-wider text-sm mb-2">
                    <MdFemale size={20}/> Strategic Goal 2035
                    </div>
                    <h3 className="text-3xl font-bold mb-4">SBH WOMEN HOSPITAL PVT LTD</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                    By 2035, we will be in the top 5 women hospitals of Central India, respected for excellence in patient care and established as the most trusted women care hospital.
                    </p>
                    <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                        Excellence in patient care
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                        Most trusted women care brand
                    </li>
                    </ul>
                </div>
            </div>
        </div>
     </section>
    <Footer/>
    </>
)
}

export default Hospitals