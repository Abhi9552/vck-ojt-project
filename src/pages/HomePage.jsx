import Header from "../components/Header/Header";

const HomePage = () => {
    return(
        <div class="body">
          
            <Header/>
            <div class="inner-body">
      
           <img src="images/vck.png" height="230" width="1200px">
           
           </img> 
           <h1>Welcome to Vivekanand College!</h1> 
           <h2>Your journey to excellence starts here.</h2>
      <p>
        **Vivekanand College** is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.<br /><br />
        At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
      </p>
      <h2>Why Choose Vivekanand College...</h2>
      <ul type="square"></ul>
        <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
        <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
        <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
        <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
        <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
        <h2>Campus Life & Facilities</h2>
        <img src="images/vck image 1.jpeg" width="450px " height="250px" ></img>
        <img src="images/vck img 2.jpg" width="450px" height="250"></img>
        <h4>Ready to start your journey with us?</h4>
        <div class="f1">
        <a href="/courses"><center><button>Explore Course</button></center></a>
      </div>
    </div>
    </div>
    
    )
  }

export default HomePage;