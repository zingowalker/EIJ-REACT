import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/Home';
import NavbarDark from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'

const Layout = () => {
  return (
    <div className="app">
      <NavbarDark />
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