import { Route, Routes } from "react-router-dom"
import Home from "../views/Home"
import Product from "../views/Product"
import ProductDetail from "../views/ProductDetail"
import ArticleDetail from "../views/ArticleDetail"
import Cart from "../views/Cart"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/detail/:id" element={<ProductDetail />} />
            <Route path="/article/detail/:id" element={<ArticleDetail />} />
            <Route path="/special-offers" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default AppRoutes