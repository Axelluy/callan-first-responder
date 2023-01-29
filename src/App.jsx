import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarouselContainer from "./components/CarouselContainer";
import Home from "./components/Home";
import Team from "./components/Team";
import Form from "./components/Form";
import Ead from "./components/Ead";



function App() {
  return (
    <Router>
      <NavBar />
      


      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/gallery" element={<CarouselContainer />} />
        <Route path="/team" element={<Team />} />
        <Route path="/form" element={<Form />} /> 
        <Route path="/ead" element={<Ead />} /> 
      </Routes>
      
    </Router>
  );
}

export default App;
