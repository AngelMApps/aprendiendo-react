import './App.css'
import {useState,useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Contact from './pages/Contact.jsx';
function Contador(){
    const [counter,setCounter]=useState(0);
    const [semaforo,setSemaforo]=useState(false);
    useEffect(()=>{
        setSemaforo(!semaforo);
    },[counter])
    const contar = ()=>{
        setCounter(counter+1);
    }
    return (
        <div>
            <span>{counter}</span>
            <p>el semaforo esta en color {semaforo ? 'verde' : 'rojo'}</p>
            <button type="submit" onClick={contar}>sumar</button>
        </div>
    )
}

function App() {
    const count = 0;
  return (
      <div className="App">
          <Router>
              <ul>
                  <li>
                      <Link to='/'>Home</Link>
                  </li>
                  <li>
                      <Link to='/contact'>Contact</Link>
                  </li>
              </ul>
              <Routes>
                  <Route path='/' element={<Contador/>}/>
                  <Route path='/contact/:name' element={<Contact/>} />
              </Routes>
          </Router>
          
    </div>
  )
}

export default App
