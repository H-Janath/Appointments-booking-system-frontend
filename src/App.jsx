import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointment from "./pages/MyAppointment";
import Appointmet from "./pages/Appointment";  
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/doctors/:specialicity" element={<Doctors/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/my-profile" element={<MyProfile/>} />
        <Route path="/my-appointment" element={<MyAppointment/>} />
        <Route path="/appointment/:docId" element={<Appointmet/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
