import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CancellationPolicy from "./pages/CancellationPolicy";

import LadakhTours from "./pages/LadakhTours/LadakhTours";
import LadakhTourDetails from "./components/LadakhTourDetails/LadakhTourDetails";
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
            <Route path="Ladakh/:tourId" element={<LadakhTourDetails />} />
            <Route
              path="Destination/South-India"
              element={<SouthIndiaTours />}
            />
            <Route
              path="South-India/:tourId"
              element={<SouthIndiaTourDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
