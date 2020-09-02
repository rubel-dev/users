import React from 'react';

const Salary = (props) => {
     const newSalary = props.salary;
     console.log(newSalary)
     let total = 0;
     for(let i =0;i<newSalary.length;i++){
         const user = newSalary[i];
         total =total + user.salary;
     }

    return (
        <div className='salary'>
            <h3> Yearly Salary</h3>
    <p>User Count : {newSalary.length}</p> 
            <p>Total Salary : ${total} </p>

        </div>
    );
};

export default Salary;