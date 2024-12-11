import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PolicyCalculation from './components/policyCalculation';
import Illustration from './components/Illustration';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/calculate" element={<PolicyCalculation />} />
            <Route path="/illustration" element={<Illustration />} />
        </Routes>
    </Router>
);

export default App;
