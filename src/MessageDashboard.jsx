import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function MessageDashboard() {
    let navigate= useNavigate();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);

    useEffect(()=>{

        getmessageemail();

    },[])

    let getmessageemail=()=>{
        axios.get(`http://localhost:8080/getemail`)
        .then((response)=>{
            if(response.data){
                setMessages(response.data);
            }
        })
        .catch((error)=>{
            alert(error);
        })
    }

    let deletemessage=(emailid)=>{
        axios.delete(`http://localhost:8080/deleteemail/${emailid}`)
        .then((response)=>{
            if(response.data="Record deleted successfully"){
                alert("Message deleted successfully!")
            }
        })
        .catch((error)=>{
            alert(error);
        })
    }

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
          
          onClick={() => navigate("/admindashboard")}
        ></i>
      </div>
        <div>
          <br/><br/>  <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.length > 0 ? (messages.map((msg,index)=>(
                        <tr key={index}>
                            <td>{msg.name}</td>
                            <td>{msg.email}</td>
                            <td>{msg.subject}</td>
                            <td>{msg.message}</td>
                            <td>
                                <button className='btn bg-danger text-light'
                                onClick={()=>deletemessage(msg.emailid)}>Delete</button>
                            </td>
                        </tr>
                    ))):(
    <tr>
      {/* Show message across all columns except Action */}
      <td colSpan="4" className="text-center">
        No Messages Found
      </td>
      <td></td>
    </tr>
  )

                    }

                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
