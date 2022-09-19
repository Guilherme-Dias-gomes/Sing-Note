import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from "./pages/admin/login/login";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/login-ADM" element={< Login />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);
