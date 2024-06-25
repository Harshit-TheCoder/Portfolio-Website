import React from 'react';
import "../src/css/description.css";

function Description(){
    return(
        <div  className="scrollable-div" style={{ overflowY:"scroll", maxHeight: "65vh" }}>
          <ul>
                    <li className='precise_insights_content'>
                        <span className='precise_insights'>Native</span>: Kolkata
                    </li>
                    <li className='precise_insights_content'>
                        <span className='precise_insights'>Current Location</span>: Chennai
                    </li>
                    <li className='precise_insights_content'>
                        <span className='precise_insights'>Occupation</span>: Student
                    </li>
                    <li className='precise_insights_content'>
                        <span className='precise_insights'>Alma Mater</span>: DPS Megacity,Kolkata
                    </li>
                    <li className='precise_insights_content'>
                        <span className='precise_insights'>College</span>: SRM Institute of Science and Technology,Kattankulathur
                    </li>
                    <li className='precise_insights_content'>
                        <span className='precise_insights'>Degree</span>: B-Tech in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning
                    </li>
          </ul>
                <p class="About_content">
                    Hello !! <br /> My name is Harshit Harlalka. I am thrilled to have this opportunity to introduce myself to you.
                    <br /> I always had a passion for Artificial Intelligence and Machine Learning. 
                    Over the years, I've had the privilege of learning coding from a personalized Tutor and Online Courses.
                    <br /> These experiences have not only shaped my professional journey but also allowed me to develop a keen eye for Coding.
                </p>
                <p class="About_content">
                Through this website I want you to get an insite about me , my skills , and my journey which I want to share with you.
                  I started my coding journey with Java in 2019, when I was in standard 9 in my school. 
                  I had already completed most of it's portion before I came to standard 11 where due to a major academic setback of 2 years i was unable to continue the same momentum.
                  I resumed my coding journey after joining college where in about 5 months I completed courses on C Language,C++ Language,Python Language(half),
                  course on Artificial Intelligence and Machine Learning and Full Stack Web Development Course.
                  <br />
                </p>
        </div>
    );
}

export default Description;