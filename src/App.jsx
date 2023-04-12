// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet
// } from "react-router-dom";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import LadakhTours from "./pages/LadakhTours/LadakhTours";
import LadakhTourDetails from "./components/LadakhTourDetails/LadakhTourDetails";
import SouthIndiaTours from "./pages/SouthIndiaTours/SouthIndiaTours";
import SouthIndiaTourDetails from "./components/SouthIndiaTourDetails/SouthIndiaTourDetails";


import './App.css'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },

//       {
//         path: "/Destination/Ladakh",
//         element: <LadakhTours />
//       },
//       {
//         path: "/Tour/:id",
//         element: <LadakhTourDetails />
//       },
//       {
//         path: "/Destination/South-India",
//         element: <SouthIndiaTours />
//       },
//       {
//         path: '/Tour/:id',
//         element: <SouthIndiaTourDetails />
//       },

//     ]
//   },

// ])

// function App() {

//   return (
//     <RouterProvider router={router}>
//       <div className="app">
//       </div>
//     </RouterProvider>
//   )
// }
// export default App;

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='Destination/Ladakh' element={<LadakhTours />} />
            <Route path='tours/:tourId' element={<LadakhTourDetails />} />
            <Route path='Destination/South-India' element={<SouthIndiaTours />} />
            <Route path='Destination/South-India/:tourId' element={<SouthIndiaTourDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;