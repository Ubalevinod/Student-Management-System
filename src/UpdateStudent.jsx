import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function UpdateStudent() {
        let navigate = useNavigate();


    const [firstname,setFirstname] = useState('');
        const [lastname,setLastname] = useState('');
        const [gender,setGender] = useState('');
        const [age,setAge] = useState('');
        const [dob,setDob] = useState('');
        const [contactno,setContactno] = useState('');
        const [email,setEmail] = useState('');
        const [address,setAddress] = useState('');
        const [sclass,setSclass] = useState('');
        const [percentage,setPercentage] = useState('');
        const [profile,setProfile] = useState('');

         let handleimg=(event)=>{
  var file= event.target.files[0];
  //file name type size
  var filepath=`./img/${file.name}`;
  console.log(filepath);
  setProfile(filepath);
 }

 let info = useParams();
 let sid = info.sid;

 useEffect(()=>{
    axios.get(`http://localhost:8080/${sid}`)
    .then((response)=>{
        if(response.data){
            let stud=response.data;
            console.log(stud);
            setFirstname(stud.firstname);
            setLastname(stud.lastname);
            setAge(stud.age);
            setGender(stud.gender);
            setDob(stud.dob);
            setContactno(stud.contactno);
            setEmail(stud.email)
            setAddress(stud.address);
            setSclass(stud.sclass);
            setPercentage(stud.percentage);
            setProfile(stud.profile);
        }
    })
    .catch((error)=>{
        alert(error);
    })
 },[sid])

 let updatestudent = (e)=>{
    e.preventDefault();
    let newstud = {firstname,lastname,gender,age,dob,contactno,email,address,sclass,percentage,profile}
    axios.put(`http://localhost:8080/update/${sid}`,newstud)
    .then((response)=>{
        if(response.data=="Student record updated successfully"){
            alert("Student record updated successfully");
            navigate("/admindashboard")

        }
    }).catch((error)=>{
        alert(error);
    })
 }

  return (
    <div className="container-fluid p-0 samebgcolor">
        <div style={{ padding: "10px" }}>
        <i 
          className="bi bi-arrow-left"  style={{
          fontSize: "2rem",
          color: "white",
          cursor: "pointer",
          position: "absolute",
          left: "20px"
        }}
          
          onClick={() => navigate("/admindashboard")}
        ></i>
      </div><br/>
      <p className='fontlight'>
        Use this form to update the selected student’s details. Make changes only where needed and ensure all information is accurate before saving the updates.
      </p>
        <h1>Update Student</h1><br/>
        <form className='allfroms' onSubmit={updatestudent}>
            <label for='firstnames' className='form-label'>Enter Firstname</label>
            <input type='text' id='firstnames' className='form-control'
            value={firstname} onChange={(e)=>setFirstname(e.target.value)}></input>

            <label for='lastnames' className='form-label'>Enter Lastname</label>
            <input type='text' id='lastnames' className='form-control'
            value={lastname} onChange={(e)=>setLastname(e.target.value)}></input>

            <label for='studgende' className='form-label'>Gender</label>
            <select id='studgende' className='form-select'
            value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option>Select Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>

            <label for='studage'>Age</label>
            <select id='studage' className='form-select'
            value={age} onChange={(e)=>setAge(e.target.value)}>
                <option>Your Age</option>
                <option value='18'>18</option>
                <option value='19'>19</option>
                <option value='20'>20</option>
                <option value='21'>21</option>
                <option value='22'>22</option>
                <option value='23'>23</option>
                <option value='24'>24</option>
                <option value='25'>25</option>
            </select>

            <label for='datestud' className='form-label'>Date of Birth</label>
            <input type='date' id='datestud' className='form-control'
            value={dob} onChange={(e)=>setDob(e.target.value)}></input>

            <label for='studcontact' className='form-label'>Contact Number</label>
            <input type='number' id='studcontact' className='form-control'
            value={contactno} onChange={(e)=>setContactno(e.target.value)}></input>

            <label for='studemail' className='form-label'>Email</label>
            <input type='text' id='studemail' className='form-control'
            value={email} onChange={(e)=>setEmail(e.target.value)}></input>

            <label for='studaddress' className='form-label'>Address</label>
            <input type='text' id='studaddress' className='form-control'
            value={address} onChange={(e)=>setAddress(e.target.value)}></input>

            <label for='studclass' className='form-label'>Course/Class</label>
            <input type='text' id='studclass'className='form-control'
            value={sclass} onChange={(e)=>setSclass(e.target.value)}></input>

            <label for='studperc' className='form-label'>Last Year/12th Percentage</label>
            <input type='number' id='studperc' className='form-control'
            value={percentage} onChange={(e)=>setPercentage(e.target.value)}></input>

            <label for='profile-pic' className='form-label'>Upload Profile Picture</label>
            <input type='file'  placeholder='profile' id='profile-pic' className='form-control'
            accept='image/*' onChange={handleimg}></input><br/>

            <button type='submit' className='btn bg-secondary'>Update Student</button>

        </form><br/>
    </div>
  )
}
