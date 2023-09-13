
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './components/Navbar';
import UncontrolledExample from './components/Carosel';
import Shoplist from './components/Shoplist';
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import Login1 from './components/Login1';
import Register1 from './components/Register1';
function App() {
  const [data,setData]=useState([
    {name:"adidas",quantity:15,price:"340dt",color:"black"}
,{name:"nike",quantity:30,price:"250dt",color:"rose"},
{name:"puma",quantity:40,price:"150dt",color:"bleu"}
])
 const khalil=()=>{
 var hamouch=JSON.parse(localStorage.getItem("produit"))
 if(hamouch !==null){
  setData([...data,hamouch])
 }
 } 

  return (
    <div className="App">
     <ColorSchemesExample khalil={khalil}/>
      <Routes>
     <Route  path='/login' element={<Login/>}/> 
     <Route path='/Register' element={<Register/>} />
     <Route path='/Shoplist' element={<Shoplist najiba={data}/>} />
     <Route path='/Login1' element={<Login1/>} />
      <Route path='/Register1' element={<Register1/>} />
     </Routes>
    </div>
  );
}

export default App;
