import React from 'react'
import { CompletedTodos, Home,Layout } from './pages'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


const App = () => {

  const router = createBrowserRouter([
    {path:'/',element:<Layout/>,
      children:[
        {path:'/',element:<Home/>},
        {path:'/completedtodos',element:<CompletedTodos/>}
      ]
    }
  ])
  return (
    <div>
      <Toaster/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
