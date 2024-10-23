// routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound'; // Optionnel, pour gérer les routes non trouvées
import Header from '../components/Header';
import Footer from '../components/Footer';

function AppRoutes() {
  return (
    <Router>
      <Header />
      <main className="main">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> {/* Route non trouvée */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
