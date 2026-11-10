import { Routes, Route } from "react-router";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />

        <Route path="about" element={<About />}>
          <Route path="mission" element={<div>Mission</div>} />
          <Route path="team" element={<div>Team</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
          <Route />
        </Route>
        <Route path="products" element={<Products />} />
        <Route
          path="products/:productId/selected/:item"
          element={<ProductPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
