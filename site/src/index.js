import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Login from "./pages/admin/login/login";
import CadastrarProduto from "./pages/admin/CadastroProduto/produto.js";
import Barra from './components/adm/aba-lateral-adm'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< CadastrarProduto />} />
                <Route path="/login/admin" element={< Login />} />
                <Route path="/admin/produto" element={< CadastrarProduto />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);
