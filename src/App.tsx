import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import Doctors from "./Pages/Doctors"
import AboutUs from "./Pages/AboutUs"
import Blogs from "./Pages/Blogs"
import Gallery from "./Pages/Gallery"
import Signup from "./Pages/SignUp"
import SignIn from "./Pages/SignIn"
import Departments from "./Pages/Departments"
import Eyecare from "./Pages/Eyecare"
import Maternity from "./Pages/Maternity"
 import Paediatric from "./Pages/Paediatric"
import Gynae from "./Pages/Cosmetic-gynae"
import Ivf from "./Pages/Ivf"
import Cataract from "./Pages/Cataract"
import ContactUs from "./Pages/ContactUs"
import Labtest from "./Pages/Labtest"
import HealthCare from "./Pages/Healthcare"
import Pharmacy from "./Pages/Pharmacy"
import Hospitals from "./Pages/Hospitals"
import Career from "./Pages/Career"
import Appointment from "./Pages/Appointment"
import Refractive from "./Pages/Refractive"
import Cornea from "./Pages/Cornea"
import Retina from "./Pages/Retina"
import PediatricEyeCare from "./Pages/PaediaEyeCare"
import Glaucoma from "./Pages/Glaucoma"
import Specialities from "./Pages/Specialities"
import { Contact } from "lucide-react"

const App = () => {
  return (
    <>
    
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/departments" element={<Departments/>}/>
        <Route path="/eyecare" element={<Eyecare/>}/>
        s<Route path="/maternity" element={<Maternity/>}/>
        <Route path="/paediatric" element={<Paediatric/>}/>
        <Route path="/cosmetic-gynae" element={<Gynae/>}/>
        <Route path="/ivf" element={<Ivf/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/labtesting" element={<Labtest/>}/>
        <Route path="/healthcare" element={<HealthCare/>}/>
        <Route path="/pharmacy" element={<Pharmacy/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/hospitals" element={<Hospitals/>}/>
        <Route path="/book-appointment" element={<Appointment/>}/>
        <Route path="/cataract" element={<Cataract/>}/>
        <Route path="/refractive" element={<Refractive/>}/>
        <Route path="/cornea" element={<Cornea/>}/>
        <Route path="/retina" element={<Retina/>}/>
        <Route path="/paediaeyecare" element={<PediatricEyeCare/>}/>
        <Route path="/glaucoma" element={<Glaucoma/>}/>
        <Route path="/our-specialities" element={<Specialities/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App