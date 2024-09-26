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
    defaultValue="Hello World"
  />
    </>
  )
}

export default Add