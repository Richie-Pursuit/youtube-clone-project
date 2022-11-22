import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import VideoCard from './Components/VideoCard';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowVideo from './Components/ShowVideo';




function App() {
  return (
    <Router>
      <div className="App">
       
        <Nav />
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/videos/:id" element={<ShowVideo />} />
        
        </Routes>
        
      </div>
    </Router>

  );
}

export default App;
