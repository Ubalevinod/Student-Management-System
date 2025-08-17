import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddStudent from './AddStudent';
import AdminDashboardStud from './AdminDashboardStud';
import UpdateStudent from './UpdateStudent';
import Home from './Home';
import HomeFacilites from './HomeFacilites';
import Register from './Register';
import HomeAboutUs from './HomeAboutUs';
import HomeContactUs from './HomeContactUs';
import MessageDashboard from './MessageDashboard';


function App() {
  return (
    <center>
      <>
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/aboutus" element={<HomeAboutUs></HomeAboutUs>}></Route>
        <Route path='/contactus' element={<HomeContactUs></HomeContactUs>}></Route>
        <Route path="/facilities" element={<HomeFacilites></HomeFacilites>}></Route>
        <Route path="/studentdashboard" element={<StudentDashboard/>}></Route>
        <Route path="/addstudent" element={<AddStudent></AddStudent>}></Route>
        <Route path="/admindashboard" element={<AdminDashboardStud></AdminDashboardStud>}></Route>
        <Route path="/messages" element={<MessageDashboard></MessageDashboard>}></Route>
        <Route path="/update/:sid" element={<UpdateStudent></UpdateStudent>}></Route>
        <Route path="/registration" element={<Register></Register>}></Route>

      </Routes>

      </BrowserRouter>
      </>
      
    </center>
  );
}

export default App;
