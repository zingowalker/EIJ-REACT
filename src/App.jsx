import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CancellationPolicy from "./pages/CancellationPolicy";
import LadakhTours from "./pages/LadakhTours/LadakhTours";
import LadakhTourDetails from "./components/LadakhTourDetails/LadakhTourDetails";
import HimachalTours from "./pages/HimachalTours/HimachalTours";
import HimachalTourDetails from "./components/HimachalTourDetails/HimachalTourDetails";
import SouthIndiaTours from "./pages/SouthIndiaTours/SouthIndiaTours";
import SouthIndiaTourDetails from "./components/SouthIndiaTourDetails/SouthIndiaTourDetails";

import "./App.css";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
