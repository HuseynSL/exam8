import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routers from './routers/Router'
const router=createBrowserRouter(Routers)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
