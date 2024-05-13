import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import página inicial - Todos
import Home from './home/HomePage'

// Import páginas Mobile
import SobreMobile from "./pages/mobile/PageSobre/pageMobileSobre";
import TermosMobile from "./pages/mobile/termos/termosMobile"
import ProdutosMobile from "./pages/mobile/Produtos/ProdutosMobile"






function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobremobile" element={<SobreMobile />} />
                <Route path="/termosmobile" element={<TermosMobile />} />
                <Route path="/produtosmobile" element={<ProdutosMobile />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes
