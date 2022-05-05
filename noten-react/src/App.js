import React from "react";
import HomePage from "./pages/home";
import { Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;