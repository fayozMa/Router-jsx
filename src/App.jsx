import { createBrowserRouter , RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from './pages/Home'
import Contact  from "./pages/Contact";
import About  from "./pages/About";
import Error  from './pages/Error'
function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          index:true,
          element:<Home/>,
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"*",
          element:<Error/>
        }
      ]
    },
  ])
  return <RouterProvider router={routes} />
}

export default App;