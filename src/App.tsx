import React from 'react';
import Home from './pages/home';
import AddLivro from './pages/addLivro';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes >
        {/* <Route path="/about">
          <About />
        </Route> */}

        <Route path="/" element={<Home />} />
        <Route path="/addLivro" element={<AddLivro />} />
      </Routes>
    </Router>
  );
}

export default App;
