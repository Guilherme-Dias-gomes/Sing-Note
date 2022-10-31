import { ToastContainer } from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ProdutosDetalhes from './pages/usuario/detalhesProduto'
import RodapeUsuario from './components/usuario/rodape-usuario';
import CarrinhoUsuario from './pages/usuario/carrinhousuario';
import FavoritosUsuario from './pages/usuario/favoritos-usuario';
import Pagamento from './pages/usuario/pagamento';
import CadastroUsuario from './pages/usuario/cadastrarUsuario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={< PageHome />} />
        <Route path="/admin/login" element={< Login />} />
        <Route path="/admin/produto" element={<  CadastrarProduto />} />
        <Route path="/admin/pedidos" element={< PagePedidos />} />
        <Route path="/admin/consulta" element={< ConsultaProduto />} />
        <Route path="/ElementoProduto" element={< ElementoProduto />} />
        <Route path='/admin/alterar/:id' element={< CadastrarProduto />} />
        <Route path='/produto/:id/detalhes' element={< ProdutosDetalhes />} />

        <Route path="/usuario/busca" element={< BuscaUsuario />} />
        <Route path="/login" element={< LoginUsuario />} />
        <Route path="/usuario/rodape" element={< RodapeUsuario />} />
        <Route path="/carrinho" element={< CarrinhoUsuario />} />
        <Route path="/favoritos" element={< FavoritosUsuario />} />
        <Route path="/pagamento" element={< Pagamento />} />
        <Route path="/cadastro" element={< CadastroUsuario />} />
        <Route path="/alterar/:id" element={< CadastroUsuario />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);