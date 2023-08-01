import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Base({children}) {
  const navigate = useNavigate();
  
  return (
    <div className='base-design'>
    <div className='top-bar'>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1"><i class='bx bx-data'></i>Employee's Data</span>
    <span style={{marginLeft:"600px"}} className='nav-list' onClick={()=>navigate("/")}><i class='bx bx-home'></i>Home</span>
    <span style={{marginLeft:"50px"}} className='nav-list' onClick={()=>navigate("/add")}><i class='bx bx-add-to-queue'></i>ADD</span>
  </div>
</nav>
    </div>
    <div className='content'>
    {children}
    </div>
    <div className='footer'>
    
    </div>
    </div>
  )
}
