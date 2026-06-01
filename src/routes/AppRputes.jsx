import { Route, Routes } from "react-router-dom"
import Home from "../views/Home"
import Product from "../views/Product"
import ProductDetail from "../views/ProductDetail"
import ArticleDetail from "../views/ArticleDetail"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/detail/:id" element={<ProductDetail />} />
            <Route path="/article/detail/:id" element={<ArticleDetail />} />
            <Route path="/special-offers" element={<Product />} />
        </Routes>
    )
}

export default AppRoutes