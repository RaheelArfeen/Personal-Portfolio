import './App.css'
import Index from './Pages/Index'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import NotFound from './Pages/NotFound';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index></Index>,
      errorElement: <NotFound></NotFound>
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
