import React from 'react';
import './Cart.css';
import { Button } from 'react-bootstrap';

const Cart = (props) => {
  const courses=props.courses;
  const removeBtnHandler=props.removeBtnHandler;
  console.log(removeBtnHandler);
  
  const totalPrice=(courses.reduce((total,course)=>total+course.price,0)).toFixed(2);
  
  return (
    <div className='cart__container'>
      <h5>Course Added:{courses.length}</h5>
      <p><strong>Total Price:{totalPrice} </strong></p>
      <div>
      <ul>
        {
          courses.map((course)=><li> {course.name}</li>)
        }
      </ul>
      </div>
      <Button  variant='dark'  size="sm" block>Proceed To checkout</Button>
       
    </div>
  );
};

export default Cart;