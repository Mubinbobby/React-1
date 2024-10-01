import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Add = () => {
  const [Employee, setEmployee]=useState({
    empId:'',
    empName:'',
    department:'',
    location:'',
  })

  let fetchValue=(e)=>{
    // console.log(e)
    setEmployee({...Employee,[e.target.name]:e.target.value}) //spread operation (...)
  }

  let sendData=()=>{
    alert("Data Submitted")
    console.log(Employee)
  }
  return (
    <>
    <h2>New Employee</h2>

    <TextField
    id="outlined-required"
    label="Employee ID"
    name='empId'
    value={Employee.empId}
    onChange={fetchValue}
    
  /> <br /> <br />
      <TextField
    id="outlined-required"
    label="Employee Name"
    name='empName'
    // value={Employee.empName}
    onChange={fetchValue}
  
  /> <br /> <br />
      <TextField
    id="outlined-required"
    label="Department"
    name='department'
    value={Employee.department}
    onChange={fetchValue}

  /> <br /> <br />
      <TextField
    id="outlined-required"
    label="Location"
    name='location'
    value={Employee.location}
    onChange={fetchValue}
  
  /> <br /> <br />
<button varient="submit" onClick={sendData}>Submit</button>
    </>
  )
}

export default Add