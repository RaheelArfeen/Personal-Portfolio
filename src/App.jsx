import Home from './Pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import NotFound from './Pages/NotFound';
import BackToTop from './Components/Shared/BackToTop';
import SocialSidebar from './Components/Shared/SocialSlider';

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
      <BackToTop />
      <SocialSidebar />
    </>
  )
}

export default App
