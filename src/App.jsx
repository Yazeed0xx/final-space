import { useState } from 'react'
import Char from './Comp/Char';
import Showinfo from './Comp/Showinfo';

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Char/>,
  },
  {
    path: "/detailes/:CharId",
    element: <Showinfo/>,
  },
]);

function App() {
  

  return (
    <>
          <RouterProvider router={router} />

    </>
  )
}

export default App
