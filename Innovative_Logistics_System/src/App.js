import React from 'react'
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Cartlist from "./Cartlist";
// import Footer from "./Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<Cartlist />} />
      </Routes>
      {/* <Footer /> */}
    </> 
  )
}

export default App;
