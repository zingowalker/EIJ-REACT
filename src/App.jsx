import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/Home';
import Ladakh from "./pages/Ladakh/Ladakh";
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
        path: '/ladakh',
        element: <Ladakh />
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