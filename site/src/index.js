import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Login from "./pages/admin/login/login";
import CadastrarProduto from "./pages/admin/CadastroProduto/index.js";
import PageHome from "./pages/admin/home/homeADM";
import PagePedidos from "./pages/admin/pedidos/pedido";
import ConsultaProduto from "./pages/admin/consultarProduto/index";
import ElementoProduto from './components/adm/elemento-produto/index';
import BuscaUsuario from './pages/usuario/busca';
import LoginUsuario from './pages/usuario/loginUsuario';
import RodapeUsuario from './components/usuario/rodape-usuario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
        <ToastContainer/>
            <Routes>
                <Route path="/" element={< PageHome />} />
                <Route path="/admin/login" element={< Login />} />
                <Route path="/admin/produto" element={<  CadastrarProduto/>} />
                <Route path="/admin/pedidos" element={< PagePedidos />} />
                <Route path="/admin/consulta" element={< ConsultaProduto />} />
                <Route path="/ElementoProduto" element={< ElementoProduto />} />
                <Route path='/admin/alterar/:id' element={< CadastrarProduto />} />
                <Route path="/usuario/busca" element={< BuscaUsuario />} />
                <Route path="/usuario/login" element={< LoginUsuario />} />
                <Route path="/usuario/rodape" element={< RodapeUsuario />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);