import { Route, Routes} from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Add from './Components/Add';
import Update from './Components/Update';
import {  useState } from 'react';

function App() {
  const [workerdata,setWorkerData]=useState([]);
 

  

  
    
    
   
 
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Dashboard
        workerdata={workerdata}
        setWorkerData={setWorkerData}

        />}>
      
      </Route>
      <Route exact path='/add' element={<Add
        workerdata={workerdata}
        setWorkerData={setWorkerData}
        />}>
      
      </Route>
      <Route exact path='/edit/:id' element={<Update
        workerdata={workerdata}
        setWorkerData={setWorkerData}
      
        />}>
        
      
      </Route>
      </Routes>
         
    </div>
  );
}

export default App;
