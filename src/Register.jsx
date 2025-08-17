import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function () {
    const [isRegistered,setIsRegistered] = useState(false);

    let navigate = useNavigate();

    let [firstname,setFirstname] = useState('');
      let [lastname,setLastname] = useState('');
      let [email,setEmail] = useState('');
      let [contactno,setContactno] = useState('');
      let [gender,setGender] = useState('');
      let [role,setRole] = useState('');
      let [sid,setSid] = useState('');
      let [password,setPassword] = useState('');
      let [username,setUsername] = useState('');
      let [confirmpassword,setComfirmpassword] = useState('');

      let [uname,setUname] = useState('');
        let [upassword,setUpassword] = useState('');
      
      
        let validation = ()=>{
          if(firstname==""||lastname==""||gender==""||email==""||parseFloat(contactno)==0||role==""||parseFloat(sid)==0||
      password==""||username==""||confirmpassword==""){
          alert("Please Fill all the feilds!!");
          return false;
      
          }else if(!/^[A-za-z\s]{2,30}$/.test(firstname)){
              alert("Please enter alphabet in firstname feild");
              return false;
          }
          else if(!/^[A-za-z\s]{2,30}$/.test(lastname)){
              alert("Please enter alphabet in lastname feild");
              return false;
          }
          else if(!/^\S+@\S+\.\S+$/.test(email)){
              alert("Please enter valid emailid with  . and @");
              return false;
          }else if(!/^\d{10}$/.test(contactno)){
              alert("Please enter 10 digit contact no");
              return false;
          }else{
              return true;
          }
        }

        let registerstud = (event)=>{
            event.preventDefault();
            if(validation()){
        let studreg = {
            firstname,
            lastname,
            email,
            contactno,
            gender,
            role,
            username,
            password,
            confirmpassword,
            sid

        };
        axios.post(`http://localhost:8080/register`,studreg)
        .then((response)=>{
            if(response.data=="User Registration successful"){
                alert("Registration Successful!");
            }
        })
        .catch((error)=>{
            alert("Try again"+error);
        })
        }
    }

    let userlogin = (event)=>{
        event.preventDefault();
        let logindetails = {username:uname ,password:upassword};
        axios.post(`http://localhost:8080/login`,logindetails)
        .then((response)=>{
            console.log(response.data);
            localStorage.setItem("user",JSON.stringify(response.data));
        let userdata=response.data;

                if(userdata.role.trim().toLowerCase()=="admin"){
                    navigate("/admindashboard");
                }else{
                    navigate("/studentdashboard");
                }
        })
        .catch((error)=>{
            alert("Faild to login "+error);
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
          
          onClick={() => navigate("/")}
        ></i>
      </div><br/>
      <p className='fontlight' >
        Enter the student’s personal, academic, and contact details to register them in the system. Ensure all fields are correct before saving to maintain accurate student records.
      </p>
        <h1>Register user</h1><br/>

        {!isRegistered ? (
            <form className='allfroms' onSubmit={registerstud}> 
            <p>If already register click here to login .
                <button className='btn bg-secondary' onClick={(e) => { e.preventDefault(); setIsRegistered(true); }}>Login</button>
            </p>
            <label className='form-label' for="firstusername">Enter Firstname</label>
            <input type='text' id="firstusername" className='form-control'
            onChange={(event)=>{setFirstname(event.target.value)}}></input>

            <label className='form-label' for="lastusername">Enter Lastname</label>
            <input type='text' id="lastusername" className='form-control'
            onChange={(e)=>{setLastname(e.target.value)}}></input>

            <label className='form-label' for="useremail">Enter Email</label>
            <input type='text' id="useremail" className='form-control'
            onChange={(e)=>{setEmail(e.target.value)}}></input>

            <label className='form-label' for="usercontact">Enter Contact Number</label>
            <input type='number' id="usercontact" className='form-control'
            onChange={(e)=>{setContactno(e.target.value)}}></input>

            <label className='form-label' for="usergender">Select Gender</label>
            <select id="usergender" className='form-select'
            onChange={(e)=>{setGender(e.target.value)}}>
                <option>Select Your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <label className='form-label' for="userrole">Select Role</label>
            <select id="userrole" className='form-select'
            onChange={(e)=>{setRole(e.target.value)}}>
                <option>Select Role</option>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
            </select>

            <label className='form-label' for='useridstud'>Enter Student id</label>
            <input type='number' id="useridstud" className='form-control'
            onChange={(e)=>{setSid(e.target.value)}}></input>

            <label className='form-label' for="usernamee">Enter Username</label>
            <input type='text' id="usernamee" className='form-control'
            onChange={(e)=>{setUsername(e.target.value)}}></input>

            <label className='form-label' for="userpassword">Enter Password</label>
            <input type='password' id="userpassword" className='form-control'
            onChange={(e)=>{setPassword(e.target.value)}}></input>

            <label className='form-label' for="userconfirmpass">Confirm Password</label>
            <input type='password' id="userconfirmpass" className='form-control'
            onChange={(e)=>{setComfirmpassword(e.target.value)}}></input><br/>

            <button className='btn bg-secondary'>Register</button>
            </form>
        ):(
            <form className='allfroms' onSubmit={userlogin}>

                <label className='form-label' for="loginusernamee">Enter Username</label>
            <input type='text' id="loginusernamee" className='form-control'
            onChange={(e)=>{setUname(e.target.value)}}></input>

            <label className='form-label' for="loginuserpassword">Enter Password</label>
            <input type='password' id="loginuserpassword" className='form-control'
            onChange={(e)=>{setUpassword(e.target.value)}}></input><br></br>

                        <button className='btn bg-secondary'>Login</button>

            </form>
        )}<br/>
    </div>
  )
}

