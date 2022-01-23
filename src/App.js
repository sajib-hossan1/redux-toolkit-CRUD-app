import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Info from "./components/Info/Info";
import AddContact from "./components/AddContact/AddContact";
import EditInfo from "./EditInfo/EditInfo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Navbar></Navbar>
        <Routes>
            <Route exact path='/' element={<Home></Home>} />
            <Route exact path='/home' element={<Home></Home>} />
            <Route exact path='/info/:id' element={<Info></Info>} />
            <Route exact path='/add' element={<AddContact></AddContact>} />
            <Route exact path='/edit/:id' element={<EditInfo></EditInfo>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
