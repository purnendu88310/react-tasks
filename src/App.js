import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/product-list/product-list";
import Search from "./components/search/search";
import Navigation from './components/navigation';

export default function App() {

   return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Search />} />
          <Route path="/product-list" element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
    

    
  );
}
