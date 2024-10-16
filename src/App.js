import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import './index.css'
import Hero from './Hero';
import About from './component/about';
import Home from './component/home';
import Contact from './component/contact';
import Login from './component/login';
import Navbar from './component/navbar';
import Post from './component/post';
function App() {
  return (
   <>
   {/* <Hero/> */}
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/hero' element={<Hero/>} />
   <Route path="/home" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/login" element={<Login />} />
   <Route path="/post" element={<Post />} />

   
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
