import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const View = () => {
 const [student,setStudent]=useState([]);
 const {id}=useParams();
  useEffect(()=>{
    axios.get("http://localhost:8081/view/"+id)
    .then(res=>{
        
        setStudent(res.data[0]); 
        console.log("The user id is ",student)
    }
        )
    .catch(err=>console.log("The error is",err))
  })

  return (
    <>
    <div class="flex justify-between items-center mb-4">
     <h2 class="text-lg font-semibold">The Detail</h2>
     {/* {JSON.stringify(student, null, 2)} */}
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
          
                <tr >
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{student.id}</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{student.name}</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{student.email}</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <Link to={`view/${student.id}`} class="text-white p-2 rounded-lg bg-blue-500 hover:text-gray-600 mr-2">View</Link>
                    <Link to={`edit/${student.id}`} class="text-white p-2 rounded-lg bg-green-500 hover:text-blue-600 mr-2">Edit</Link>
                    <button class="text-white p-2 rounded-lg bg-red-500 hover:text-red-600">Delete</button>
                </td>

            </tr>
           
            
         
           
         </tbody>
     </table>
 </div>
 
    </>
  )
}
