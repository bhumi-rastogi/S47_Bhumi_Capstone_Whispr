import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<p>HomePage</p>}/>
      <Route path='about' element={<p>About</p>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
