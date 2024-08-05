import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login'
import Home from './Home/Home'
import CategoryList from './Category/CategoryList/CategoryList'
import ProductList from './Product/ProductList/ProductList';
import Brand from './Brand/Brand';
import Coupon from './Coupon/Coupon';
import Branch from './Branch/Branch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="category" element={<CategoryList />}></Route>
        <Route path="brand" element={<Brand />}></Route>
        <Route path="coupon" element={<Coupon />}></Route>
        <Route path="product" element={<ProductList />}></Route>
        <Route path="branch" element={<Branch />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
);
