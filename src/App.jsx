import { Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import { SharedLayout } from "./components/SharedLayout";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import GamesSearchPage from "./pages/GamesSearchPage";
import GameInfoPage from "./pages/GameInfoPage";
import LoginPage from "./pages/LoginPage";
import ReviewsPage from "./pages/ReviewsPage";
import NewReviewPage from "./pages/NewReviewPage";

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
