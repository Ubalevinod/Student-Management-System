import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate();
  return (
   
      
    <div className=' p-0 samebgcolorhome'>
      <div className='parentdivone'>
        <div className='upsideicondiv'>
        <div className='collegeicon'> 
        </div></div>

        <div className='upsidepara'>
          <div className='paradivhome'><p className='text-light'>Zenith Institute of Technology</p></div>
        </div> 

        <div className='upsidebtn'>
          <button className='btn bg-light text-dark' onClick={()=> navigate('/registration')}>Register/Login</button>
        </div>
      </div>

      <div className='mainimagediv'>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.forbesindia.com/media/images/2023/Jan/img_202081_harvard_210785200_bg1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://media.istockphoto.com/id/1185326263/photo/happy-student-in-london.jpg?s=612x612&w=0&k=20&c=SQHdU5QJpdgZ65uYc-LkYIC1F-vgfEk5ID3kN3o8L-0=" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://media.istockphoto.com/id/1390813037/photo/group-of-multiracial-international-exchange-university-student-friends-sitting-on-the-grass.jpg?s=612x612&w=0&k=20&c=At5f3aPX516Py5-NCqnYPqCppAeu-bb14Y-wxVCAFJY=" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>

      <div className='parentdivone'>
        <div className='aboutdiv'
            onClick={()=>navigate('/aboutus')}><h3 className='headingthree'>About Us</h3></div>

        <div className="contactdiv"
            onClick={()=>navigate('contactus')}><h3 className='headingthree'>Contact Us</h3></div>

        <div className="facilitiesdiv"
            onClick={() => navigate('/facilities')}><h3 className='headingthree'>Facilities</h3></div>
      </div>
      
        
    </div>
    
  )
}


