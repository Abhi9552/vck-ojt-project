import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const ContactPages = () => {
    return(
        <div class="body">
            <Header/>
            <div class="inner-body">
            <center><font color="blue"><h1>Contact Us</h1></font></center>
        <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p><hr></hr>
        <h2>General Enquiries</h2>
        <h5>Vivekanand College Main Campus</h5>
        <p>[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
India</p>
        <p>Phone: +91 12345 67890
          <p>Email: info@vivekanandcollege.edu</p>
          <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
        </p><hr></hr>
      <h2>Admissions Office</h2>
      <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
      <p>Phone: +91 98765 43210</p>
      <p>Email: admissions@vivekanandcollege.edu</p><hr></hr>
      <h2>Student Support Services</h2>
      <p>For current student support, academic advising, or general assistance:</p>
      <p>Phone: +91 87654 32109</p>
      <p>Email: studentsupport@vivekanandcollege.edu</p><hr></hr>
      <h2>Find Us on the Map</h2>
      <p><a href="https://maps.google.com/?q=Vivekanand+College" target="_blank" rel="noopener noreferrer">View on Google Map</a></p><hr></hr>
      
      <h2>Send Us a Message</h2>
      <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
   </div>
     <Footer/>
      </div>
      
        
    )
}
export default ContactPages;