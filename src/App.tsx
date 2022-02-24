import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seller from './components/Seller/Seller';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Seller_details from './components/sellers-details/Seller_details';

function App() {
  return (
    <div className='App' >
      <Router>
        <Routes>
          <Route element={<Seller></Seller>} path='/' ></Route>
          <Route element={<Seller></Seller>} path='seller' ></Route>
          <Route element={<Seller_details></Seller_details>} path='seller/:id' ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
