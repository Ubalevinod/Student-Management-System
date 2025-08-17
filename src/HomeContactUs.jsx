import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

export default function HomeContactUs() {
  let navigate = useNavigate();

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [message,setMessage] = useState('');

  let validatione = ()=>{
    if(name==""||email==""||subject==""||message==""){
      alert("Please enter all the details!");
      return false;
    }else if(!/^[A-za-z\s]{2,30}$/.test(name)){
      alert("Please enter valid name. Only are alphabet allowed");
      return false;
    }else if(!/^\S+@\S+\.\S+$/.test(email)){
        alert("Please enter valid emailid with  . and @");
        return false;
    }else{
      return true;
    }  
  }

  const addemail = (event)=>{
    event.preventDefault();
    if(validatione()){
      const emaile={
        name,
        email,
        subject,
        message

      };
      axios.post(`http://localhost:8080/addemail`,emaile)
      .then((response)=>{
        if(response.data){
          alert("Messege sent successfully!");
        }

      })
      .catch((error)=>{
        alert(error);
      })

    }


  }


  return (
    <div className=' p-0 samebgcolor'>
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
        We welcome your messages! Whether it’s questions, feedback, or collaboration ideas, our team is eager to listen and respond to your needs promptly.
        </p>
    <div >

      <div class="contactboarder">
        <div className='innercontactfirst'>
          <div className="p-4 bg-light rounded shadow">
  <h3 className="mb-3 text-primary">Get in Touch</h3>

  <p className="mb-2">
    📞 <strong className='text-primary'>Phone:</strong> 
    <a href="tel:+911234567890" className="text-decoration-none ms-2">+91 12345 67890</a>
  </p>

  <p className="mb-2">
    ✉️ <strong className='text-primary'>Email:</strong> 
    <a href="mailto:contact@example.com" className="text-decoration-none ms-2">contact@example.com</a>
  </p>

  <p className="mb-2">
    🏠 <strong className='text-primary'>Address:</strong>  
    <span className="ms-2 text-primary">123, Main Street, Pune, Maharashtra, India</span>
  </p>

  <div className="mt-3">
    <strong className='text-primary'>Follow Us:</strong>
    <div className="d-flex gap-3 mt-2">
      <a href="#" className="text-dark fs-4"><i className="bi bi-facebook"></i></a>
      <a href="#" className="text-dark fs-4"><i className="bi bi-instagram"></i></a>
      <a href="#" className="text-dark fs-4"><i className="bi bi-linkedin"></i></a>
      <a href="#" className="text-dark fs-4"><i className="bi bi-twitter"></i></a>
    </div>
  </div>
</div>

        </div>
        <div className='innercontactsecond'>
          <div className="p-4 bg-white rounded shadow">
  <h3 className="mb-3 text-success">Send Us a Message</h3>

  <form onSubmit={addemail}>
    <div className="mb-3">
      <label className="form-label">Your Name</label>
      <input type="text" className="form-control" placeholder="Enter your name" required 
      value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>

    <div className="mb-3">
      <label className="form-label">Your Email</label>
      <input type="email" className="form-control" placeholder="Enter your email" required 
      value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>

    <div className="mb-3">
      <label className="form-label">Subject</label>
      <input type="text" className="form-control" placeholder="Enter subject" required 
      value={subject} onChange={(e)=>setSubject(e.target.value)}/>
    </div>

    <div className="mb-3">
      <label className="form-label">Message</label>
      <textarea className="form-control" rows="4" placeholder="Write your message" required
      value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
    </div>

    <button type="submit" className="btn btn-success w-100">
      Send Message
    </button>
  </form>
</div>

        </div>
      </div>

    </div>
    </div>
  )
}
