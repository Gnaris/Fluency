import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Accueil from "./pages/Home/Home";
import About from "./pages/About/About";

import "./style/main.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil/>}></Route>
          <Route path='/sneakers' element={<Accueil/>}></Route>
          <Route path='/news' element={<Accueil/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/help' element={<Accueil/>}></Route>
          <Route path='/*' element={<Accueil/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  </React.StrictMode>,
)
