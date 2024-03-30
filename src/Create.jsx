import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';


export const Create = () => {
  const navigate=useNavigate();

  const [values,setValues]=useState({
    name:'',
    email:''
  })

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("The values are",values)
    axios.post("http://localhost:8081/student",values)
        .then(res=>setValues(res=>{
            toast.success("The sudenent is added successfuly");
          navigate("/");
        }))
        .catch(err=>console.log(err))
}



  return (
   <div><div class="flex justify-between items-center mb-4">
   <h2 class="text-lg font-semibold">Add Contact</h2>
 
</div>

<form onSubmit={handleSubmit} class="max-w-lg mx-auto">
  
   <div class="mb-4">
       <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
           Name
       </label>
    <input  onChange={e=>setValues({...values,name:e.target.value})}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Name" />
   </div>
   <div class="mb-6">
       <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
           Email
       </label>
       <input  onChange={e=>setValues({...values,email:e.target.value})}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Email" />
   </div>
   <div class="flex items-center justify-between">
       <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
           Add
       </button>
   </div>
</form>
</div>
  )
}
