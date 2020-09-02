import React from 'react';
import { useState } from 'react';
 
import { useEffect } from 'react';
import User from '../User/User';
import './Information.css'
import Salary from '../User/Salary';

 

const Information = () => {
    const [users,setUsers] =useState([])
    const[salary,setSalary] = useState([])
    const[phone,setPhone] = useState([])

    const userAddHandler =(use)=>{
         const newSalary =[...salary,use]
         setSalary(newSalary)
    }
    const userPhoneHandler =(phon)=>{ 
        setPhone(phon)
    }
     
 
   useEffect(()=>{
        setUsers([
            {
              
              "name": "Leanne Graham",
              "img":"https://iili.io/dL2mqG.jpg",
              "email": "Sincere@april.biz",
              "salary": 33661,
              "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                  "lat": "-37.3159",
                  "lng": "81.1496"
                }
              },
              "phone": "1-770-736-8031 x56442"
              
              },
           
            {
              
              "name": "Ervin Howell",
              "salary": 16001,
              "img":"https://iili.io/dL24gR.jpg",
              "salary": 13445,
              
              "email": "Shanna@melissa.tv",
              "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                  "lat": "-43.9509",
                  "lng": "-34.4618"
                }
              },
              "phone": "010-692-6593 x09125"
               
            }, 
          
            {
             
              "name": "Clementine Bauch",
              "salary": 22290,
              "img":"https://iili.io/dL2r0v.jpg",
              
              "email": "Nathan@yesenia.net",
              "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                  "lat": "-68.6102",
                  "lng": "-47.0653"
                }
              },
              "phone": "1-463-123-4447"
            },
          
            {
               
              "name": "Patricia Lebsack",
              "salary": 10908,
              
              "img":"https://iili.io/dL2gqJ.jpg",
             
              "email": "Julianne.OConner@kory.org",
              "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                  "lat": "29.4572",
                  "lng": "-164.2990"
                }
              },
              "phone": "493-170-9623 x156",
              "website": "kale.biz"
              
            },
            {
              
              "name": "Chelsey Dietrich",
              "salary": 36592,
              "img":"https://iili.io/dL2i5N.jpg",
              "email": "Lucio_Hettinger@annie.ca",
              "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                  "lat": "-31.8129",
                  "lng": "62.5342"
                }
              },
              "phone": "(254)954-1289",
              "website": "demarco.info"
               
            },
            {
              
              "name": "Mrs. Dennis Schulist",
              "salary": 22298,
              "img":"https://iili.io/dL2seI.jpg",
              
              "email": "Karley_Dach@jasper.info",
              "address": {
                "street": "Norberto Crossing",
                "suite": "Apt. 950",
                "city": "South Christy",
                "zipcode": "23505-1337",
                "geo": {
                  "lat": "-71.4197",
                  "lng": "71.7478"
                }
              },
              "phone": "1-477-935-8478 x6430",
              "website": "ola.org"
               
            },
            {
             
              "name": "Kurtis Weissnat",
              "salary": 21948,
              "img":"https://iili.io/dL2Lbt.jpg",
              
              "email": "Telly.Hoeger@billy.biz",
              "address": {
                "street": "Rex Trail",
                "suite": "Suite 280",
                "city": "Howemouth",
                "zipcode": "58804-1099",
                "geo": {
                  "lat": "24.8918",
                  "lng": "21.8984"
                }
              },
              "phone": "210.067.6132",
              "website": "elvis.io"
               
            },
            {
           
              "name": "Nicholas Runolfsdottir V",
              "salary": 42413,
             "img":"https://iili.io/dL2ZzX.jpg",
              "email": "Sherwood@rosamond.me",
              "address": {
                "street": "Ellsworth Summit",
                "suite": "Suite 729",
                "city": "Aliyaview",
                "zipcode": "45169",
                "geo": {
                  "lat": "-14.3990",
                  "lng": "-120.7677"
                }
              },
              "phone": "586.493.6943 x140"
              
            },
            {
            
              "name": "Glenna Reichert",
              "salary": 18806,
              "img":"https://iili.io/dL2tXn.jpg",
              "email": "Chaim_McDermott@dana.io",
              "address": {
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                "geo": {
                  "lat": "24.6463",
                  "lng": "-168.8889"
                }
              },
              "phone": "(775)976-6794 x41206"
            },
            {
              
              "name": "Clementina DuBuque",
              "salary": 45434,
            "img":"https://iili.io/dL2Dss.jpg",
              "email": "Rey.Padberg@karina.biz",
              "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                  "lat": "-38.2386",
                  "lng": "57.2232"
                }
              },
              "phone": "024-648-3804"
               
            },
            {
              
              "name": "Clementina DuBuque",
              "salary": 33968,
              "img":"https://iili.io/dL2mqG.jpg",
            
              "email": "Rey.Padberg@karina.biz",
              "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                  "lat": "-38.2386",
                  "lng": "57.2232"
                }
              },
              "phone": "024-648-3804"
               
            },
            {
              
              "name": "Clementina DuBuque",
              "salary": 10538,
               "img":"https://iili.io/dL2p1f.jpg",
              "email": "Rey.Padberg@karina.biz",
              "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                  "lat": "-38.2386",
                  "lng": "57.2232"
                }
              },
              "phone": "024-648-3804"
               
            },
            {
              
              "name": "Clementina DuBuque",
              "salary": 48189,
              "img":"https://iili.io/dL2yg4.jpg",
              "email": "Rey.Padberg@karina.biz",
              "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                  "lat": "-38.2386",
                  "lng": "57.2232"
                }
              },
              "phone": "024-648-3804"
            
            },
            {
              
              "name": "Clementina DuBuque",
              "salary": 48589,
              "img":"https://iili.io/dL3Hdl.jpg",
            
              "email": "Rey.Padberg@karina.biz",
              "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                  "lat": "-38.2386",
                  "lng": "57.2232"
                }
              },
              "phone": "024-648-3804"
               
            },
            {
              
              "name": "Clementina DuBuque",
              "salary": 46589,
              "img":"https://iili.io/dL2yg4.jpg",
            
              "email": "Rey.Padberg@karina.biz",
              "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                  "lat": "-38.2386",
                  "lng": "57.2232"
                }
              },
              "phone": "024-648-3804"
               
            }
          ])
    },[])
    console.log(users)

     return (
        <div className='user-container'>
            <div className='user'>
             
            {
                users.map(user =><User phone={phone} user ={user}  userAddHandler={userAddHandler} userPhoneHandler={userPhoneHandler}></User>)
            }
            </div>
            <div className ='salary'>
                 <Salary salary ={salary}></Salary>

            </div>
           
        </div>
    );
};

export default Information;