import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {createRoutesFromElements, Route} from 'react-router-dom'

// Importing components

import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";


function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route path='/Home' element={<Home/>}/>
        <Route path="/Products" index element={<Products/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="*" element={<h1>Not found</h1>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
