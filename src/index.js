import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Textform from './Components/Textform';
import Homepage from './Pages/Homepage'
 import Contactus from './Pages/Contactus'
 import Navbar from  './Components/Navbar';


{/* 




*/ }

const configRouting = (


  <Router>



    <Navbar title="Gaurav" home="home" />
    <div className="container my-3   ">
      <Textform heading="Enter text ..." />
    </div>
    {/* <Sidebar />  */}

    <Routes>
      <Route path="/" element={< Homepage />} />
     {/* <Route path="/Contactus" element={<Contactus />} /> */}
    </Routes> 


  </Router>  
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  configRouting

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
