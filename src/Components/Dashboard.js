import React from 'react';
import Base from '../Base/Base';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Typography, Grid } from '@mui/material';

export default function Dasboard({workerdata,setWorkerData}) {
  
  const navigate=useNavigate("");
  
  
  const getData= async ()=>{
    const response=await fetch(`https://day42task-v9pg.onrender.com/api/all`,{
      method:"GET",
     
      
    });
    const data=await response.json();
    if(data){
      setWorkerData(data.data)
      
    }
    }
   getData();
   

  const remove =async (id)=>{
      const res = await fetch (`https://day42task-v9pg.onrender.com/api/remove/${id}`,{
        method:"DELETE",
      });
      const data = await res.json();
      console.log(data)
      }
  
  
  return (
    <Base>
    
    <Grid container spacing={3}>
    
    <div style={{display:'flex',flexDirection:"row",gap:"1rem",flexWrap:"wrap"}}>
    {workerdata.map((wrk,idx)=>(
    <Card sx={{ maxWidth: 250 }} >
    <CardContent style={{textAlign:'center'}}>
    <Typography gutterBottom variant="h5" component="div" >
      {wrk.name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
     EmployeeId:{wrk.employeeid}
    </Typography>
     <Typography variant="body2" color="text.secondary">
     Email:{wrk.email}
    </Typography>
    <Typography variant="body2" color="text.secondary">
 Department:{wrk.department}
   </Typography>
   <Typography variant="body2" color="text.secondary">
    Start Date:{wrk.date}
   </Typography>
   <Typography variant="body2" color="text.secondary">
    Phone:{wrk.phone}
   </Typography>
  </CardContent>
  <CardActions style={{marginLeft:'40px'}}>
      <Button size="small" onClick={()=>navigate(`/edit/${wrk._id}`)}>Edit<i class='bx bxs-edit'></i></Button>
      <Button size="small" onClick={()=>remove(wrk._id)}>Remove<i class='bx bxs-trash-alt'></i></Button>
  </CardActions>
  </Card>
  ))}
</div>

  
</Grid>
  
    </Base>
  )
}
