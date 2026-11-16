import { Route, Routes } from "react-router";
import SharedLayout from "./components/SharedLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />}>
          <Route path="mission" element={<div>Mission</div>} />
          <Route path="team" element={<div>team</div>} />
          <Route path="reviews" element={<div>reviews</div>} />
        </Route>

        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
