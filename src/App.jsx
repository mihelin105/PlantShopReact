import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Houseplants from "./pages/Houseplants";
import Care from "./pages/Care";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/houseplants" element={<Houseplants />} />
          <Route path="/care" element={<Care />} />
          {/* Add more pages like Contact, Login, Register later */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
