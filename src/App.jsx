import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/Home';
import LadakhTours from "./pages/LadakhTours/LadakhTours";
import SouthIndiaTours from "./pages/SouthIndiaTours/SouthIndiaTours";
import SouthIndiaTour from "./components/SouthIndiaTour/SouthIndiaTour";
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
        path: "/Ladakh-Tours/:id",
        element: <LadakhTours />
      },
      {
        path: "/South-India-Tours/:id",
        element: <SouthIndiaTours />
      },
      {
        path: '/Tour/:id',
        element: <SouthIndiaTour />
      },
    ]
  }
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