import React from 'react'
import Home from './home/Home'
import {Navigate, Route, Routes} from "react-router-dom"
import Signup from './components/Signup'
import Cources from './components/cources/Cources'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <div >
     <div>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Cources/>:<Navigate to ="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
     </Routes>
     <Toaster />
     </div>
    </div>
  )
}

export default App
