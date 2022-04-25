import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { BookPage, CategoryPage, HomePage,BookMarkPage  } from './pages';
import Navbar from './components/navbar';

const Router: React.FC = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/category-:name/:id' element={<CategoryPage/>}/>
          <Route path='/book/:bookName' element={<BookPage/>}/>
          <Route path='/bookmark' element={<BookMarkPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;