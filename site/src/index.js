import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Login from "./pages/admin/login/login";
import CadastrarProduto from "./pages/admin/CadastroProduto/produto.js";
import PageHome from "./pages/admin/home/homeADM";
import PagePedidos from "./pages/admin/pedidos/pedido";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/login/admin" element={< Login />} />
                <Route path="/admin/produto" element={<  CadastrarProduto/>} />
                <Route path="/admin/home" element={< PageHome />} />
                <Route path="/admin/pedidos" element={< PagePedidos />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);
