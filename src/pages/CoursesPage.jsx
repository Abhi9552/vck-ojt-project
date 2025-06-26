import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const CoursesPage = () => {
    return(
        <div class="body">
            <Header/>
            <div class="inner-body">
            <center><font color="blue"><h1>Our Academic Programs</h1></font></center>
            
        <p>
          Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
        </p><hr></hr>
        <h2>Discover Campus Life</h2>
        <video src="videos/vck video.mp4" width="700" height="300"  controls></video><hr></hr>
        <h2>Undergraduate Programs (UG)</h2>
        <ul type="square"></ul>
        <h5><li align="left">Bachelor of Science (B.Sc.)</li></h5>
        <ul type="square">
        <li>Computer Science (3 years)</li>
        <li>Information Technology (3 years)</li>
        <li>Biotechnology (3 years)</li>
        </ul>
        <ul type="square"></ul>
        <h5><li align="left">Bachelor of Commerce (B.Com)</li></h5>
        <ul type="square">
          <li>Accounting & Finance (3 years)</li>
          <li>Banking & Insurance (3 years)</li>
        </ul>
        <ul type="square"></ul>
        <h5><li align="left">Bachelor of Arts (B.A.)</li></h5>
        <ul type="square">
          <li>English Literature (3 years)</li>
          <li>Psychology (3 years)</li>
        </ul><hr></hr>
        <h2>Postgraduate Programs (PG)</h2>
        <ul type="square"></ul>
        <h5><li align="left">Master of Science (M.Sc.)</li></h5>
        <ul type="square">
          <li>Computer Science (2 years)</li>
          <li>Information Technology (2 years)</li>
          </ul>
          <ul type="square"></ul>
          <h5><li align="left">Master of Commerce (M.Com) (2 years)</li></h5>
          <h5><li align="left">Master of Arts (M.A.) (2 years)</li></h5><hr></hr>
          <h2>Program Details & Fee Structure (Annual)</h2>
          <table>
            <thead>
            <tr>
              <th>Program Type</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Annual Fee (INR)</th>
              <th>Eligibility</th>
            </tr>
            </thead>
            <tbody>
              <tr>
              <td>UG</td>
              <td>B.Sc. Computer Science</td>
              <td>3 Years</td>
              <td>₹ 85,000</td>
              <td>10+2 with PCM (50%)</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
              <td>UG</td>
              <td>B.Com. Accounting & Finance</td>
              <td>3 Years</td>
              <td>₹ 70,000</td>
              <td>10+2 Commerce (45%)</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
              <td>PG</td>
              <td>M.Sc. Information Technology</td>
              <td>2 Years</td>
              <td>₹ 95,000</td>
              <td>B.Sc. IT/CS (50%)</td>
              </tr>
            </tbody>
          </table><hr></hr>
        <h2>Specialized & Vocational Courses</h2>
        <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p><hr></hr>
        <h4>Explore detailed syllabi and admission criteria on our Admissions page.</h4>
        <div class="f1">
        <a href="/contact"><center><button >Inquire About Cources</button></center></a>
        </div>
        </div>
        <Footer/>
        </div>
        
    )
}
export default CoursesPage;