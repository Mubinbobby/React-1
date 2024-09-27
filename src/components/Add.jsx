import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Add = () => {
  return (
    <>
    <h2>New Employee</h2>
    <TextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Employee ID"
  /> <br /> <br />
      <TextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Employee Name"
  /> <br /> <br />
      <TextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Department"
  /> <br /> <br />
      <TextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Location"
  />
    </>
  )
}

export default Add