import React from 'react';
import { FiDelete } from 'react-icons/fi';
import './DisplayCartInfo.css'

const DisplayCartInfo = (props) => {
    const {removeFromCart} = props;
    const { instructor, image, id } = props.courseInfo;
    
    return (
        <div>
        <h4 className="course-info"> 
            <span> 
            <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={image} alt="" /> 
            </span> 
            {instructor}
            <FiDelete onClick={() => removeFromCart(id)} className='del-icon'/>
        </h4>
    </div> 
    );
};

export default DisplayCartInfo;