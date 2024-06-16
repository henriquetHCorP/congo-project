import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import Header from './components/Header'
import FooterComp from './components/Footer'
 
 export default function App() {
   return (
    // <div className="bg-blue-300">
    // <div className="bg-hcorp1">
      <BrowserRouter>
      <Header /> 
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/dashboard" element ={<Dashboard />} />
        <Route path="/sign-in" element ={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/> 
        <Route path="/projects" element={<Projects />}/>
       </Routes>
       <FooterComp /> 
      
      </BrowserRouter>
      // </div>
   )
 }
 