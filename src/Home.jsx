import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8081/")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[]);


    const handleDelete=(id)=>{
        axios.delete("http://localhost:8081/delete/"+id)
        .then(res=>
            {
            console.log("deleted successfully")
            location.reload();
            }
            )
        .catch(err=>console.log("The deleted error is",err))

    }

  return (
 


    <>
    <div class="flex justify-between items-center mb-4">
     <h2 class="text-lg font-semibold">Contact List</h2>
     <Link to="/create" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
         <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <line x1="12" y1="5" x2="12" y2="19"></line>
             <line x1="5" y1="12" x2="19" y2="12"></line>
         </svg>
         Create
     </Link>
 </div>
 
 <div class="flex justify-center">
     <table class="min-w-full">
         <thead>
             <tr>
                 <th class="px-6 py-3 bg-gray-50 border-b border-gray-200 text-gray-600 text-left text-sm uppercase font-normal">Id</th>
                 <th class="px-6 py-3 bg-gray-50 border-b border-gray-200 text-gray-600 text-left text-sm uppercase font-normal">Name</th>
                 <th class="px-6 py-3 bg-gray-50 border-b border-gray-200 text-gray-600 text-left text-sm uppercase font-normal">Email</th>
                 <th class="px-6 py-3 bg-gray-50 border-b border-gray-200 text-gray-600 text-left text-sm uppercase font-normal">Action</th>

             </tr>
         </thead>
         <tbody>
           {data.map((user,index)=>{
            return (
                <tr key={index}>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{user.id}</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{user.name}</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{user.email}</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <Link to={`view/${user.id}`} class="text-white p-2 rounded-lg bg-blue-500 hover:text-gray-600 mr-2">View</Link>
                    <Link to={`edit/${user.id}`} class="text-white p-2 rounded-lg bg-green-500 hover:text-blue-600 mr-2">Edit</Link>
                    <button onClick={()=>handleDelete(user.id)} class="text-white p-2 rounded-lg bg-red-500 hover:text-red-600">Delete</button>
                </td>

            </tr>
            )
           })}
            
         
           
         </tbody>
     </table>
 </div>
 
    </>
  )
}
