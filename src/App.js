import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Register from "./components/Register";
import Login from "./components/Login";
import Todo from "./components/Todo";
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';
import PrivateComponent from './components/PrivateComponent';

import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
  
            <Route element={<PrivateComponent />}>
              <Route path="/todo" element={<Todo />}></Route>
            </Route>

            <Route path="/" element={<Register />} ></Route>
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/form" element={<DemoForm />}></Route>
            <Route path="/productlisting" element={<ProductListing />}></Route>
            <Route path="/product/:productId" element={<ProductDetail />}></Route>
      
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
