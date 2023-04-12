import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/Home';
import LadakhTours from "./pages/LadakhTours/LadakhTours";
import LadakhTourDetails from "./components/LadakhTourDetails/LadakhTourDetails";
import SouthIndiaTours from "./pages/SouthIndiaTours/SouthIndiaTours";
import SouthIndiaTourDetails from "./components/SouthIndiaTourDetails/SouthIndiaTourDetails";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './App.css'

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: "/Destination/Ladakh",
        element: <LadakhTours />
      },
      {
        path: "/Tour/:id",
        element: <LadakhTourDetails />
      },
      {
        path: "/Destination/South-India",
        element: <SouthIndiaTours />
      },
      {
        path: '/Tour/:id',
        element: <SouthIndiaTourDetails />
      },

    ]
  },

])

function App() {

  return (
    <RouterProvider router={router}>
      <div className="app">
      </div>
    </RouterProvider>
  )
}
export default App;