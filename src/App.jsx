import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
 import AboutPages from "./pages/AboutPage";
 import CoursesPage from "./pages/CoursesPage";
import ContactPages from "./pages/ContactPages";
import "./styles/Pages.css"
import AdmisionPages from "./pages/AdmisionPages";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Abhijeet Ravindra Chougule"
          studentPhotoUrl="/images/abhi.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>


    <div>
      <Router>
       
       
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPages/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/contact" element={<ContactPages/>}/>
          <Route path="/admision" element={<AdmisionPages/>}/>
        </Routes>
      <ChatbotComponent/>
   
      </Router> 
       </div>
    </>
  )
}

export default App;