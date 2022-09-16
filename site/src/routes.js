import { ReactDOM } from "react";

import {BrowserRoutes, Routes, Route} from "react-router-dom";

import "./pages/admin/login";
import './pages/admin/home';
import './pages/admin/produto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRoutes>
            <Routes>
                <Route path="./login-ADM" element={<login />} />
            </Routes>
        </BrowserRoutes>
    </React.StrictMode>
)
