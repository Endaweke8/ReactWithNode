import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';


export const Edit = () => {
  const navigate=useNavigate();

  const [values,setValues]=useState({
    name:'',
    email:''
  })

  const {id}=useParams();
   useEffect(()=>{
     axios.get("http://localhost:8081/view/"+id)
     .then(res=>{
         
         setValues({...values,name:res.data[0].name,email:res.data[0].email}); 
         console.log("The user id is ",values)
     }
         )
     .catch(err=>console.log("The error is",err))
   })

 

const handleUpdate=(e)=>{
    e.preventDefault();
    console.log("The values are",values)
    axios.put("http://localhost:8081/values/"+id,values)
        .then(res=>setValues(res=>{
            toast.success("The student is updadted successfuly");
          navigate("/");
        }))
        .catch(err=>console.log(err))
}



  return (
   <div><div class="flex justify-center items-center my-4">
  <Link to="/" class="text-white p-2 rounded-lg bg-green-500 hover:text-blue-600 mr-2">Back</Link>
   <h2 class="text-lg font-semibold">Update Contact</h2>
 
</div>

<form onSubmit={handleUpdate} class="max-w-lg mx-auto">
  
   <div class="mb-4">
       <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
           Name
       </label>
    <input  onChange={e=>setValues({...values,name:e.target.value})}  value={values.name} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Name" />
   </div>
   <div class="mb-6">
       <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
           Email
       </label>
       <input  onChange={e=>setValues({...values,email:e.target.value})}  value={values.email} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Email" />
   </div>
   <div class="flex items-center justify-between">
       <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
           Update
       </button>
   </div>
</form>
</div>
  )
}
