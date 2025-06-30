import Home from './Pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import NotFound from './Pages/NotFound';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
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
