import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './Homepage.jsx';
import GamePage from './Gamepage.jsx';
import CreditsPage from './Creditspage.jsx';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}


