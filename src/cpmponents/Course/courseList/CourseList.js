import React from 'react';
import './CourseList.css';
import { Button, Card } from 'react-bootstrap';


const CourseList = (props) => {
  const { name, price,img,instructor} = props.course;
  
return (
    <div className="single-course" variant='mr-3'>
        <Card style={{ width: '15rem' ,marginRight:'20%'}}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="course_title"> 
            {name}
            <p><small>By {instructor} </small></p>
           
            </Card.Title>
           
            <Card.Text>
            <strong> {price}$</strong>
           </Card.Text>
            
            <Button onClick={()=>props.cartBtnHandler(props.course)} variant="dark">Enroll Now</Button>
            
          
          </Card.Body>
        </Card>

    

    </div>
  );
};

export default CourseList;