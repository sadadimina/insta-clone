import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Notification from "./Components/Notification";
import Search from "./Components/Search";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <div className="border border-black min-h-screen rounded-xl">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
