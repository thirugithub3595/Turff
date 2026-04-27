import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import BookingFlow from './pages/BookingFlow';
import MatchScorecard from './pages/MatchScorecard';
import AdminDashboard from './pages/AdminDashboard';
import CreateProfile from './pages/CreateProfile';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="page-wrapper container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/book/:turfId" element={<BookingFlow />} />
          <Route path="/scorecard" element={<MatchScorecard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
