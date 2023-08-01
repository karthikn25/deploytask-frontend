import React, { useEffect, useState } from 'react'
import Base from '../Base/Base';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Update({workerdata,setWorkerData}) {
 
  const[name,setName] = useState('');
  const[employeeid,setEmployeeId]=useState('');
  const[email,setEmail]=useState('');
  const[department,setDepartment]=useState('');
  const[date,setDate]=useState('');
  const[phone,setPhone]=useState('');
  const {id} = useParams();
  const navigate=useNavigate()
 useEffect(()=>{
  const data = workerdata?.find((data)=>data._id === id)
  console.log(data)
  if(data){
    setName(data.name)
    setEmployeeId(data.employeeid)
    setEmail(data.email)
    setDepartment(data.department)
    setDate(data.date)
    setPhone(data.phone)
  }
 },[id,workerdata])

 async function handleEditData(){
  const editData ={
    name,
    employeeid,
    email,
    department,
    date,
    phone
  }
  const res= await fetch(`https://day42task-v9pg.onrender.com/api/edit/${id}`,{
    method:"PUT",
    body:JSON.stringify(editData),
    headers:{
      "Content-Type":"application/json"
    }
  })
  const data = await res.json(editData)
  if(!data.data){
    navigate("/edit/:id")
  }navigate("/")
 }

  return (
    <Base>
    <div className='container adddata'>
    <div className='row'>
    <div className='col'>
    <h2 style={{textAlign:"center"}}>Update Employee Details</h2>
    <div className='add-container'>
    <div className='add-items'>
    <form>
    <input placeholder='Worker name' type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
    <input placeholder='Worker Id' type='text' value={employeeid} onChange={(e)=>setEmployeeId(e.target.value)}/><br/>
    <input placeholder='Email Id' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
    <select class="form-select" value={department} onChange={(e)=>setDepartment(e.target.value)} >
    <option selected >Department</option>
    <option >Security Department</option>
    <option>HR Department</option>
    <option>Developer Department</option>
    <option >Testing Department</option>
    <option >Production Department</option>
    </select><br/>
    <input placeholder='Start Date' type='text' value={date} onChange={(e)=>setDate(e.target.value)}/><br/>
    <input placeholder='Phone Number' type='Number' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    </form>
    
    </div>
    <div className='add-control'><button type="button" class="btn btn-info" onClick={handleEditData}>Update</button></div>
   
    </div>
    </div>
    </div>
    </div>
    </Base>
  )
}
