import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'; // kui meie css on all pool siis saame vajadust ülemist muuta
import './i18n';
import App from './App';
import { BrowserRouter }from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


