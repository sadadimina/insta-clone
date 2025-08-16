import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Notification from './Components/Notification';
import Search from './Components/Search';
import About from './Components/About';
import Profile from './Components/Profile';
import CommentsPage from './Components/CommentsPage';

function App() {
  return (
    <Router>
      <div className="border min-h-screen rounded-xl">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Comments/:postId" element={<CommentsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
