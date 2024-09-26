import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const employees = [
  { id: 1, name: 'John Doe', department: 'Engineering', location: 'New York' },
  { id: 2, name: 'Jane Smith', department: 'Marketing', location: 'London' },
  { id: 3, name: 'Michael Brown', department: 'HR', location: 'Berlin' },
  { id: 4, name: 'Emily White', department: 'Finance', location: 'Paris' },
  { id: 5, name: 'Chris Green', department: 'Sales', location: 'Tokyo' },
];

export const Home = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="employee table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Department</TableCell>
            <TableCell align="center">Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell align="center">{employee.id}</TableCell>
              <TableCell align="center">{employee.name}</TableCell>
              <TableCell align="center">{employee.department}</TableCell>
              <TableCell align="center">{employee.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Home;