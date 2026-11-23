import { lazy } from "react";
import { Routes, Route } from "react-router";
import { SharedLayout } from "./components/SharedLayout";
// import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
// import GamesPage from "./pages/GamesPage";
// import GameInfoPage from "./pages/GameInfoPage";
// import LoginPage from "./pages/LoginPage";

const GamesPage = lazy(() => import("./pages/GamesPage"));
const GameInfoPage = lazy(() => import("./pages/GameInfoPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<div>About</div>} />
        <Route path="games" element={<GamesPage />} />
        <Route path="games/:gameId" element={<GameInfoPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
