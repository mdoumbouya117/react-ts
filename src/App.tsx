import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Article from './pages/Article';
import Home from './pages/Home';
import Store from './pages/Store';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store/:storeId' element={<Store />} />
      <Route path='/store/:storeId/article/:articlesId' element={<Article />} />
    </Routes>
  );
}

export default App;
