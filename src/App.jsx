import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
// import Layout from "./pages/Layout.jsx";
const Layout = lazy(() => import("./pages/Layout.jsx"));
// import Home from "./pages/Home/Home";
const Home = lazy(() => import("./pages/Home/Home"));
// import About from "./pages/About";
const About = lazy(() => import("./pages/About"));
// import Contact from "./pages/Contact";
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
// import CancellationPolicy from "./pages/CancellationPolicy";
const CancellationPolicy = lazy(() => import("./pages/CancellationPolicy"));
const LadakhTours = lazy(() => import("./pages/LadakhTours/LadakhTours"));
const LadakhTourDetails = lazy(() =>
  import("./components/LadakhTourDetails/LadakhTourDetails")
);

const HimachalTours = lazy(() => import("./pages/HimachalTours/HimachalTours"));
const HimachalTourDetails = lazy(() =>
  import("./components/HimachalTourDetails/HimachalTourDetails")
);
// import HimachalTourDetails from "./components/HimachalTourDetails/HimachalTourDetails";

// import SouthIndiaTours from "./pages/SouthIndiaTours/SouthIndiaTours";
const SouthIndiaTours = lazy(() =>
  import("./pages/SouthIndiaTours/SouthIndiaTours")
);
const SouthIndiaTourDetails = lazy(() =>
  import("./components/SouthIndiaTourDetails/SouthIndiaTourDetails")
);

import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "Privacy-Policy",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: "Cancellation-Policy",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CancellationPolicy />
          </Suspense>
        ),
      },
      {
        path: "Terms-Of-Service",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <TermsOfService />
          </Suspense>
        ),
      },
      {
        path: "Destination/Ladakh",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LadakhTours />
          </Suspense>
        ),
      },
      {
        path: "Ladakh/:slug",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LadakhTourDetails />
          </Suspense>
        ),
      },
      {
        path: "Destination/Himachal",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HimachalTours />
          </Suspense>
        ),
      },
      {
        path: "Himachal/:slug",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HimachalTourDetails />
          </Suspense>
        ),
      },
      {
        path: "Destination/South-India",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SouthIndiaTours />
          </Suspense>
        ),
      },
      {
        path: "South-India/:slug",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SouthIndiaTourDetails />
          </Suspense>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <div className="app"></div>
    </RouterProvider>
  );
}

export default App;
// {
  /* <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Privacy-Policy" element={<PrivacyPolicy />} />
            <Route
              path="Cancellation-Policy"
              element={<CancellationPolicy />}
            />
            <Route path="Terms-Of-Service" element={<TermsOfService />} />
            <Route path="Destination/Ladakh" element={<LadakhTours />} />
            <Route path="Ladakh/:slug" element={<LadakhTourDetails />} />
            <Route path="Destination/Himachal" element={<HimachalTours />} />
            <Route path="Himachal/:slug" element={<HimachalTourDetails />} />
            <Route
              path="Destination/South-India"
              element={<SouthIndiaTours />}
            />
            <Route
              path="South-India/:slug"
              element={<SouthIndiaTourDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div> */
// }
