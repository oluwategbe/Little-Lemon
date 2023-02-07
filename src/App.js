import './App.css';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookingPage from './components/BookingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Home />,
  },
  {
    path: "/order-online",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Home />,
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
