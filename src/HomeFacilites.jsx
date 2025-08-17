import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeFacilites() {
    const navigate = useNavigate();
  const cards = [
    {
      img: "https://www.libraries.cam.ac.uk/sites/default/files/christs.jpg",
      text: "Library with thousands of books."
    },
    {
      img: "https://tnraocollege.org/wp-content/uploads/2022/05/20220512111738_IMG_1589-scaled.jpg",
      text: "Computer lab with modern systems."
    },
    {
      img: "https://media.istockphoto.com/id/457448925/photo/students-caring-out-experiments-in-laboratory.jpg?s=612x612&w=0&k=20&c=FTJQtQsOldAVSGtbxkEXlcNqXkSS9KwpqO2iSh17i3A=",
      text: "Science lab with latest equipment."
    },
    {
      img: "https://skcet.ac.in/wp-content/uploads/2023/12/gymimages-FOR-PAGE.jpg",
      text: "Gym for fitness and sports."
    },
    {
        img: "https://shivalikcollege.edu.in/wp-content/uploads/2023/12/U7A0727-1024x683.jpg",
        text:"Sports ground for cricket, football, and athletics."
    },
    {
        img: "https://media.gettyimages.com/id/186826741/photo/empty-lecture-hall-with-several-rows-of-seats-and-a-screen.jpg?s=612x612&w=gi&k=20&c=-PWqQT8iOzGfQvMmelA0kg47m0mk4xCtbv5U2TJL3q8=",
        text:"Auditorium for cultural programs and guest lectures."
    },
    {
        img: "https://thumbs.dreamstime.com/b/workplace-cafeteria-food-hall-interior-diverse-meal-options-fresh-vegetables-healthy-eating-choices-business-lunch-company-canteen-385691408.jpg",
        text:"Cafeteria serving healthy and delicious meals."
    },
    {
        img: "https://rcm.ac.in/wp-content/uploads/Hostel-Accomodation-scaled.jpg",
        text: "Hostel facility with comfortable and secure rooms."
    },
    {
        img: "https://www.corporateworkshop.in/art-and-craft-workshop-n-activities/art-and-craft-workshop-n-activities-for-corporate/art-and-craft-activities-for-corporate-companies/thumbs/block-printing-workshop-for-corporate-companies-india.jpg",
        text: "Art and craft room for creative activities and workshops."
    },
    {
        img: "https://img.p.mapq.st/?url=https://s3-media0.fl.yelpcdn.com/bphoto/IgPPpWOfoIG1Pdan5iIXCQ/l.jpg?w=3840&q=75",
        text: "Music and dance studio for practicing and learning arts."
    },
    {
        img: "https://sahrdayacas.ac.in/wp-content/uploads/2021/09/IMG_6522.jpg",
        text: "Medical room with first aid and emergency facilities."
    },
    {
        img: "https://www.mangalmay.org/assets/images/inner-images/wifi-campus/wifi.jpg",
        text: "Wi-Fi enabled campus for uninterrupted learning."
    },
    {
        img: "https://vidyaprabodhinicollege.edu.in/wp-content/uploads/2022/06/our-facilities-Smart-classroom.jpeg",
        text: "Smart classrooms with interactive learning tools."
    },
    {
        img: "https://www.aurora.ac.in/images/transportation.jpg",
        text: "Transportation facility with safe and reliable buses."
    },
    {
        img: "https://knu.edu.iq/facilities/halls/old_hall/1.jpg",
        text: "Seminar hall for workshops, training, and conferences."
    },
    {
        img: "https://tirayam.com/tirayam/Resourse/image/post/2BBLI-Republic-day-01-2024-3.jpg",
        text: "Republic Day celebration with flag hoisting and cultural performances."
    },
    {
        img: "https://www.thepresidiumschool.com/news_image/5sports_day_prize_dist_ggn_oct_2016_0006.jpg",
        text:"Sports Day with exciting competitions and prize distribution."
    },
    {
        img: "https://i0.wp.com/apeejay.news/wp-content/uploads/2023/06/1306-yoga-day-23-10.jpg?w=740&ssl=1",
        text:"Yoga Day with mass yoga sessions and health awareness talks."
    }


  ];

  return (

    
        <div className="container-fluid p-0 samebgcolor">
      {/* Back arrow using Bootstrap icon */}
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
        <p className='fontlight'>Explore Our College’s World-Class Facilities and Resources Designed to Support Academic Excellence and an Enriching Campus Life Experience for Every Learner.</p>
    <div className="container mt-4 ">
      <div className="row g-5">
        {cards.map((card, index) => (
          <div className="col-md-6 d-flex justify-content-center" key={index}>
            <div className="card" style={{ width: "25rem" }}>
              <img src={card.img} className="card-img-top" alt="facility" />
              <div className="card-body">
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <br/>
    </div>
  );
}
