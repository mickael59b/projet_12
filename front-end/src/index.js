import React from 'react';
import ReactDOM from 'react-dom/client';
// Importer les fichiers CSS de Bootstrap et autres bibliothèques
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
// Votre fichier CSS principal
import './assets/css/main.css'; // Import du fichier CSS principal
import App from './app/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
