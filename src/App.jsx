import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './Home'
import { Create } from './Create'
import { MainLayout } from './layouts/MainLayout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { View } from './View'
import { Edit } from './Edit'
function App() {
  const [count, setCount] = useState(0)

 return (
  <> 
   <ToastContainer />
    <BrowserRouter>
      <Routes>
         <Route  path='/main' element={<MainLayout/>}></Route>
         <Route  path='/' element={<Home/>}></Route>

         <Route  path='/create' element={<Create/>}></Route>
         <Route  path='/view/:id' element={<View/>}></Route>
         <Route  path='/edit/:id' element={<Edit/>}></Route>



      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
