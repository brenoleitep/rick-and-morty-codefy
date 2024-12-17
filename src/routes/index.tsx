import { Route, Routes } from "react-router-dom";
import CharactersPage from "../pages/CharactersPage";
import LandingPage from "../pages/LandingPage/LandingPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/persons" element={<CharactersPage />} />
    </Routes>
  );
};

export default MainRoutes;
