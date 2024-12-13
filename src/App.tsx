import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import FlashCardScreen from "./components/flashcards/FlashCardScreen";
import QuizScreen from "./components/quiz/QuizScreen";
import Navigation from "./components/navigation/Navigation";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flashcards" element={<FlashCardScreen />} />
            <Route path="/quiz" element={<QuizScreen />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </main>
      </div>
    </Suspense>
  );
}

export default App;
