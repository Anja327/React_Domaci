import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './strane/Home';
import Predlog from './strane/Predlog';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predlog" element={<Predlog />} />

        </Routes>
      </Router >
    </div>
  );
}

export default App;
