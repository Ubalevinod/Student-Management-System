import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function HomeAboutUs() {
        const navigate = useNavigate();
    
  return (
    <div className='container-fluid p-0 samebgcolor'>
        <div style={{ padding: "10px" }}>
        <i 
          className="bi bi-arrow-left"  style={{
          fontSize: "2rem",
          color: "white",
          cursor: "pointer",
          position: "absolute",
          left: "20px"
        }}
          
          onClick={() => navigate("/")}
        ></i>
      </div><br/>
      <p className='fontlight'>
        Zenith Institute of Technology is committed to excellence in education, empowering students with knowledge, skills, and values to lead, innovate, and succeed in a dynamic world.
      </p>
    
        <div className='aboutusinnerdivfirst'>
            <div className="inneraboutfirst">
             <br/>   <h3 className='text-primary'>About ZIT</h3>
                <p className='thirddivfirstparaa text-secondary'>Zenith Institute of Technology (ZIT) is a premier engineering and management college established in 2005.
Located in Bengaluru, Karnataka, the institute is known for academic excellence and industry-driven learning.
ZIT offers undergraduate and postgraduate programs in engineering, computer science, and business studies.
</p>
            </div>
            <div className="inneraboutsecond">
             <br/>   <h3 className='text-primary'>Vision Excellence</h3>
                <p className='thirddivfirstparaa text-secondary'>To be a center of academic excellence and innovation in higher education.
To empower students with the skills, knowledge, and values for global leadership.
To foster a culture of research, creativity, and lifelong learning.
To bridge the gap between academia and industry through practical exposure.
</p>
            </div>


        </div>
        <div className="aboutusinnerdivsecond">
            <div className="inneraboutfirst">
            <br/>    <h3 className='text-primary'>Our Mission</h3>
               <p className='thirddivfirstparaa text-secondary'>To provide quality education that nurtures innovation and critical thinking.
To equip students with the skills needed for real-world challenges.
To foster academic excellence through continuous learning and improvement.
To promote ethical values, leadership, and community responsibility.
</p>
            </div>
            <div className="inneraboutsecond">
             <br/>   <h3 className='text-primary'>Campus Facilities</h3>
                <p className='thirddivfirstparaa text-secondary'>A fully digitized library with access to e-books, journals, and study material.
Modern computer labs with high-speed internet and updated software tools.
Smart classrooms equipped with interactive boards and audio-visual aids.
On-campus hostel facilities with 24/7 security and Wi-Fi access.
.</p>
            </div>

        </div>
        <div className="aboutusinnerdivthird">
            <div className="thirddivfirst">
                <p className='thirddivfirstpara text-primary'>Explore a Wide Range of Undergraduate and Postgraduate Programs Designed to Build Careers in Technology, Business, and Computer Science.</p>
            </div>
            <div className="thirddivsecond">
              <br></br>  <h2 className='text-primary'>Courses Offered</h2><br/>
<ul className='text-secondary'>
  <li>BCA – Bachelor of Computer Applications</li>
  <li>BBA – Bachelor of Business Administration</li>
  <li>BCS – Bachelor of Computer Science</li>
  <li>MCA – Master of Computer Applications</li>
  <li>MCS – Master of Computer Science</li>
  <li>MBA – Master of Business Administration</li>
  <li>BSc IT – Bachelor of Science in Information Technology</li>
  <li>PGDCA – Post Graduate Diploma in Computer Applications</li>
</ul>

            </div>

        </div>
        <div className="aboutusinnerdivforth">
            <div className="thirddivfirst">
                <p className='thirddivfirstpara text-primary'>
                    This Student Management System is a full-stack web application designed to manage student data, course registrations, attendance, and more. 
                </p>

            </div>
            <div className="thirddivsecond">
              <br></br>  <h3 className='text-primary'>Project Created By</h3>
<p className='thirddivfirstpara text-success'><br/>
  <strong >Name:</strong> Vinod Ubale <br/>
  <strong>Degree:</strong> B.Sc. Computer Science<br/>
  <strong>Contact No:</strong> 90226687** <br/>
  <strong>university:</strong> Savitribai Phule Pune University<br/>
  <strong>Email:</strong> vinodubale666@gmail.com<br/>
  </p>
            </div>

        </div><br/>

    
    </div>
  )
}
