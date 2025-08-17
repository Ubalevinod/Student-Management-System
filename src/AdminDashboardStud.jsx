import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function AdminDashboardStud() {
          let navigate = useNavigate();

     let [student,setStudent] = useState([]);
     
     let [name, setName] = useState('');


    useEffect(()=>{
        getdata();
    },[])



    let getdata=()=>{
        axios.get("http://localhost:8080/all")
        .then((response)=>{
            if(response.data){
                setStudent(response.data);
            }
        })
        .catch((error)=>{alert(error)})
    }

    let deletestudent = (sid)=>{
        axios.delete(`http://localhost:8080/delete/${sid}`)
        .then((response)=>{
            if(response.data=="Student record deleted successfully"){
                alert("Student record deleted successfully!");
                getdata();
            }
        })
        .catch((error)=>{
            alert(error);
        })
    }

    let Updatestudent = (sid)=>{
        navigate(`/update/${sid}`);

    }

    let searchbyfirstname = ()=>{
        return    axios.get(`http://localhost:8080/firstname/${name}`);

    }

    let searchbylastname = ()=>{
        return    axios.get(`http://localhost:8080/lastname/${name}`);
    }
    const searchBoth = () => {
    Promise.all([searchbyfirstname(), searchbylastname()])
        .then(([firstRes, lastRes]) => {
            // Merge results without duplicates
            const merged = [...firstRes.data, ...lastRes.data];
            setStudent(merged);
        })
        .catch((error) => {
            console.error("Error searching:", error);
        });
};

  return (
    <div className="container-fluid p-0 samebgcolor">
        <div
  style={{
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between" // left and right split
  }}
>
  {/* Left side icons */}
  <div style={{ display: "flex", alignItems: "center" }}>
    <i
      className="bi bi-arrow-left"
      style={{
        fontSize: "2rem",
        color: "white",
        cursor: "pointer",
        marginRight: "15px"
      }}
      onClick={() => navigate("/registration")}
    ></i>

    <i
      className="bi bi-house"
      style={{
        fontSize: "2rem",
        color: "white",
        cursor: "pointer"
      }}
      onClick={() => navigate("/")}
    ></i>
  </div>

  {/* Right side icons (grouped with gap) */}
  <div style={{ display: "flex", alignItems: "center", gap: "1cm" }}>
    <i
      className="bi bi-person-plus"
      style={{
        fontSize: "2rem",
        color: "white",
        cursor: "pointer"
      }}
      onClick={() => navigate("/addstudent")}
    ></i>

    <i
      className="bi bi-envelope"
      style={{
        fontSize: "2rem",
        color: "white",
        cursor: "pointer"
      }}
      onClick={() => navigate("/messages")}
    ></i>
  </div>
</div>

<p className='fontlight'>
    Administration Control Panel – Oversee and Operate All Student Data, Academic Records, and System Management Tools in a Streamlined, User-Friendly, and Secure Dashboard Interface
</p><br/>

    <div className="honeheading"><h1>Admin Dashboard</h1></div><br/>
        
        <div className="searchdiv">
        <div className="col-6">
    <label className='form-label' htmlFor='nameSearch'><h5>Search Student</h5></label>
    <input type='text'  className='form-control'   id='nameSearch' placeholder="Enter name of the student"
        onChange={(event) => { setName(event.target.value) }}
    />
    <br/>
    <button type='submit'  className='btn bg-info text-light'    onClick={searchBoth} 
    >   Search  </button>
</div><br/></div><br/>


    <div className='cardsdivlayout'><br/>
        <div className="container">
    <div className="row row gx-4 gy-4">
            {  
            student.map((stud)=>(
                 
                 <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={stud.sid}>
    <div className="card h-100 shadow-sm">                  
  <img src={stud.profile} className="card-img-top" alt="..."
  style={{"width":"354px","height":"250px"}}
  />
  <div className="card-body">
    <h5 className="card-title">{stud.firstname} {stud.lastname}</h5>
    <p className="card-text">
        <strong>Age</strong>: {stud.age}<br/>
        <strong>Date of Birth</strong>: {stud.dob}<br/>
        <strong>Contact no.</strong>: {stud.contactno}<br/>
        <strong>Address</strong>: {stud.address}<br/>
        <strong>Email</strong>: {stud.email}<br/>
        <strong>Class</strong>: {stud.sclass}<br/>
        <strong>12th Percentage</strong>: {stud.percentage}<br/>
        <strong>Gender</strong>: {stud.gender}<br/>
            
    </p>
    <div className="d-flex justify-content-center" style={{ gap: "2cm" }}>
        <button className='btn bg-secondary text-light' 
        onClick={()=>{deletestudent(stud.sid)}}>Delete</button>
        <button className='btn bg-primary text-light'
        onClick={()=>{Updatestudent(stud.sid)}}>Update</button>
    </div>
    
  </div>
</div>
</div>
          
       )) }
        
        </div>
        </div>
        </div><br/>
    </div>
  )
}
