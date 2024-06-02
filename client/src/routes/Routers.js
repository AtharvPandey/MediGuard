import Home from "../pages/Home";
import Services from "../pages/Services";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import { Routes, Route } from "react-router-dom";
import UploadFile from "../components/MainFunction/UploadFile";
import ViewFile from "../components/MainFunction/ViewFile";
import ShareFile from "../components/MainFunction/ShareFile";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/upload" element={<UploadFile />} />
      <Route path="/getdata" element={<ViewFile />} />
      <Route path="/share" element={<ShareFile />} />
    </Routes>
  );
};

export default Routers;
