import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import BlogsDetails from './pages/BlogsDetails';


function App() {


  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Layout/>}>
        <Route  index element ={<Home/>}  />
        <Route  path='/about' element ={<About/>}  />
        <Route  path='/service' element ={<Service/>}  />
        <Route  path='/gallery' element ={<Gallery/>}  />
        <Route path= '/blogs' element = {<Blogs/>}/>
        <Route path = '/blogsdetails' element = {<BlogsDetails/>}/>
      
        </Route>
      </Routes>
     </BrowserRouter>
        
       


    </>
  )
}

export default App
