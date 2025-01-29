import "bootstrap/dist/css/bootstrap.min.css";
import {About, Contact, Home, Menu, NotFoundPage} from './pages';
import {Routes, Route} from 'react-router-dom';

function App() {
 
  return (
    <>

   

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*"  element={<NotFoundPage/>}/>
      </Routes>

     
    </>
  )
}

export default App
