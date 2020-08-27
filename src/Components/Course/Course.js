import React from 'react';
import './course.css';
import fakeInfo from '../fakeData/fakeData'
import { useState } from 'react';
import CourseList from './courseList/CourseList';
import Cart from './courseList/Cart/Cart';





const Course = () => {
  
  const [courseInfo,setCourseInfo]=useState(fakeInfo);
  let [courses,setCourses]=useState([]);
  

  const cartBtnHandler=(addcourse)=>{
    
   const found=courses.find((course)=> course==addcourse);//Check for duplicate course
   
   if(!found){  //if not found  add the course
    const newCourse=[...courses,addcourse];
    setCourses(newCourse);
    }
   else{
     alert('You  already added this course')
   }
 }

 
 

 
return (
    <div className='course'>
      <div className='course__container'>
       {
         courseInfo.map(course=> 
          <CourseList course={course}
          cartBtnHandler={cartBtnHandler}
          
          >
          </CourseList>
          )
       }
       
      </div>
      <div className='course__cart' >
        <Cart courses={courses}
       
        >
      </Cart>
      </div>
      
    </div>
  );
};

export default Course;