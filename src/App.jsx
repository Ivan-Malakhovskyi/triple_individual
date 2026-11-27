import { Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";
import { SharedLayout } from "./components/SharedLayout";
import HomePage from "./pages/HomePage";

const GamesSearchPage = lazy(() => import("./pages/GamesSearchPage"));
const GameInfoPage = lazy(() => import("./pages/GameInfoPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage"));
const NewReviewPage = lazy(() => import("./pages/NewReviewPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<h1>About</h1>} />

          <Route path="search_games" element={<GamesSearchPage />} />

          <Route path="search_games/:gameId/" element={<GameInfoPage />}>
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="new_review" element={<NewReviewPage />} />
          </Route>

          {/* <Route path="games/:gameId/" element={<GameInfoPage />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="new_review" element={<NewReview />} />
          </Route> */}

          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Toaster />
    </>
  );
};

export default App;
