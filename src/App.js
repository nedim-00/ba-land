import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import AddNewPlace from './components/AddNewPlace';
import AllPlaces from './components/AllPlaces';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allplaces" element={<AllPlaces />} />
          <Route path="/addplace" element={<AddNewPlace />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
