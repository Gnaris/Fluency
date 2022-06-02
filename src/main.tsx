import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Product from './pages/Product/Product';

import "./style/main.css";
import Header from './components/molecules/Header';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sneakers' element={<Home/>}></Route>
          <Route path='/news' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/help' element={<Home/>}></Route>
          <Route path='/sneakers/:id' element={<Product/>}></Route>
          <Route path='/*' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
      <footer style={{height : 100}}>
      </footer>
    </>
  </React.StrictMode>,
)
