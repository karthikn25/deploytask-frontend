import React, { useState } from 'react'
import Base from '../Base/Base';
import { useNavigate } from 'react-router-dom';

export default function Add() {
  const[name,setName] = useState('');
  const[employeeid,setEmployeeId]=useState('');
  const[email,setEmail]=useState('');
  const[department,setDepartment]=useState('');
  const[date,setDate]=useState('');
  const[phone,setPhone]=useState('');
 

  const navigate = useNavigate("");
  const handleAdd = async()=>{
    const newData ={
      name,
      employeeid,
      email,
      department,
      date,
      phone
    }
    console.log(newData)
  const res = await fetch(`https://day42task-v9pg.onrender.com/api/add`,{
    method:"POST",
    body:JSON.stringify(newData),
    headers:{
      "Content-Type":"application/json"
    }
  })
  const data = await res.json();
  if(!data.data ){
    navigate("/add");
  }else{
    navigate("/")
  }
  }
  return (
    <Base>
    <div className='container adddata'>
    <div className='row'>
    <div className='col'>
    <h2 style={{textAlign:"center"}}>Add Employee Details</h2>
    <div className='add-container'>
    <div className='add-items'>
    <form>
    <input placeholder='Worker name' type='text' value={name} onChange={(e)=>setName(e.target.value)} required/><br/>
    <input placeholder='Worker Id' type='text' value={employeeid} onChange={(e)=>setEmployeeId(e.target.value)} required/><br/>
    <input placeholder='Email Id' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} required/><br/>
    <select class="form-select" value={department} onChange={(e)=>setDepartment(e.target.value)} required >
    <option selected >Department</option>
    <option >Security Department</option>
    <option>HR Department</option>
    <option>Developer Department</option>
    <option >Testing Department</option>
    <option >Production Department</option>
    </select><br/>
    <input placeholder='Start Date' type='text' value={date} onChange={(e)=>setDate(e.target.value)} required/><br/>
    <input placeholder='Phone Number' type='Number' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
    </form>
    
    </div>
    <div className='add-control' ><button type="button" class="btn btn-info" style={{cursor:"pointer"}} onClick={handleAdd}>Add Data</button></div>
   
    </div>
    </div>
    </div>
    </div>
    </Base>
  )
}
