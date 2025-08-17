import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function StudentDashboard() {
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
    <div style={{ padding: "10px", display: "flex", alignItems: "center" }}>
  <i
    className="bi bi-arrow-left"
    style={{
      fontSize: "2rem",
      color: "white",
      cursor: "pointer",
      position: "relative"
    }}
    onClick={() => navigate("/registration")}
  ></i>

  <i
    className="bi bi-house"
    style={{
      fontSize: "2rem",
      color: "white",
      cursor: "pointer",
      marginLeft: "15px" // space between arrow and home icon
    }}
    onClick={() => navigate("/")}
  ></i>
</div>


      <p className='fontlight'>
        Explore detailed profiles of students, including their photos, classes, and last-year academic performance, to stay informed and connected within the college community
      </p><br/>
        <div className='honeheading'><h1>Student Dashboard</h1></div><br/>
        
        <div className='searchdiv'>
        <div className="col-6 ">
    <label className='form-label' htmlFor='nameSearch'><h5>Search Student</h5></label>
    <input type='text'  className='form-control'   id='nameSearch' placeholder="Enter name of the student"
        onChange={(event) => { setName(event.target.value) }}
    />
    <br/>
    <button type='submit'  className='btn bg-info text-light'    onClick={searchBoth} 
    >   Search  </button>
</div></div><br/>


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
        
        <strong>Class</strong>: {stud.sclass}<br/>
        <strong>Last Year Percentage</strong>: {stud.percentage}<br/>
        
            
    </p>
    
  </div>
</div>
</div>
          
       )) }
        
        </div>
        </div><br/>
        </div><br/>
    </div>
  )
}
