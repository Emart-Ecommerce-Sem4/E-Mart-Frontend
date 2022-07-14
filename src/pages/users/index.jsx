import { CssBaseline, Stack, Typography , Button } from '@mui/material';
import React from 'react';
import NavBar from '../../components/NavBar';
import HeightBox from '../../components/HeightBox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(id,name,email,type){
  return { id , name , email , type} ;
}

const rows = [
  createData('sd21ad21s3a2d1a' , 'Thilina Sandakelum' , 'thilina@gmail.com' , 'Admin') ,
  createData('sd21ad21s3a2d1a' , 'Thilina Sandakelum' , 'thilina@gmail.com' , 'Admin') ,
  createData('sd21ad21s3a2d1a' , 'Thilina Sandakelum' , 'thilina@gmail.com' , 'Admin') ,
];

export default function Users() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <HeightBox height={10} />
      <div style={{paddingLeft : "85px" , paddingRight : "85px"}}>
        <Stack direction="row" alignItems="center">
          <div>
            <Typography variant='h2'>
              USERS
            </Typography>
          </div>
          <div style={{width : "100%" , textAlign : "right"}}>
            <Button variant="contained" style={{width : "300px" , height : "50px"}}>
              Add User
            </Button>
          </div>
        </Stack>
        <HeightBox height = {20} />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User Id</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>User Type</TableCell>
                <TableCell> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell >{row.name}</TableCell>
                  <TableCell >{row.email}</TableCell>
                  <TableCell >{row.type}</TableCell>
                  <TableCell width={250}>
                    <Stack spacing={1} direction="row">
                      <Button variant="contained" color="success" style={{height:"30px"}}> More info</Button>
                      <Button variant="contained" color="error" style={{height:"30px"}}> DELETE </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      </div>
    </div>
  );
}
