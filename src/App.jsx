import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
 import AboutPages from "./pages/AboutPage";
 import CoursesPage from "./pages/CoursesPage";
import ContactPages from "./pages/ContactPages";
import './styles/pages.css'
import AdmisionPages from "./pages/AdmisionPages";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";

const App = () => {
  return(
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
   
  )
}

export default App;