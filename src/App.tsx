import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/Aboutus"
import Ceo from "./Pages/CeoProfile"
import Team from "./Pages/Team"
import Products from "./Pages/Products"
import Service from "./Pages/Services"
import Contactus from "./Pages/Contactus"
import Hematology from "./Pages/Hematology"
import Biochemistry from "./Pages/Biochemistry"
import Electrolyte from "./Pages/Electrolyte"
import Immunoassay from "./Pages/Immunoassay"
import Elisa from "./Pages/Elisa"
import Coagulation from "./Pages/Coagulation"
import UrineAnalyzer from "./Pages/UrineAnalyzer"
import Protien from "./Pages/Protine"
import Hplc from "./Pages/Hplc"
import Blood from "./Pages/BloodGas"
import HB from "./Pages/HbMeter"
import PCOT from "./Pages/Poct"
import Microscope from "./Pages/Microscopes"
import Centrifuges from "./Pages/Centrifuges"
import { Contact } from "lucide-react"

const App = () => {
  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/ceo-message" element={<Ceo/>} />
        <Route path="/our-team" element={<Team/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/hematology" element={<Hematology/>} />
        <Route path="/biochemistry" element={<Biochemistry/>} />
        <Route path="/electrolyte" element={<Electrolyte/>} />
        <Route path="/immunoassay" element={<Immunoassay/>} />
        <Route path="/coagulation" element={<Coagulation/>} />
        <Route path="/elisa" element={<Elisa/>} />
        <Route path="/urine-analyzer" element={<UrineAnalyzer/>} />
        <Route path="/protien" element={<Protien/>} />
        <Route path="/hplc" element={<Hplc/>} />
        <Route path="/blood-gas" element={<Blood/>} />
        <Route path="/hb-meters" element={<HB/>} />
        <Route path="/poct" element={<PCOT/>} />
        <Route path="/microscopes" element={<Microscope/>} />
        <Route path="/centrifuges" element={<Centrifuges/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App