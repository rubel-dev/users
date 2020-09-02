import React from 'react';
import './User.css'

const User = (props) => {
    const{img,name,email,address,salary} = props.user;
     
     
    return (
     <div>
            <div className='users'>
           
           <div className='img'>
           <img  src={img} alt=""/>
           </div>
        
         <div className='information'> 
              <h3>Name : {name}</h3>
              <p><small>email : {email}</small></p> 
              <p><small>city : {address.city}</small></p>
                <p>salary : ${salary}</p>
              <p>Phone : {props.phone.phone} </p>
              <button onClick={()=>props.userPhoneHandler(props.user)}>Show Phone Number</button>
              <button onClick={()=>props.userAddHandler(props.user)}>Add me</button>
              
              
          </div>
      </div>
      
     </div>
    );
};

export default User;