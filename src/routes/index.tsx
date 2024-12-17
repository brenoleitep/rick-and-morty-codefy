import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import CharactersPage from "../pages/Persons/CharactersPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/persons" element={<CharactersPage />} />
    </Routes>
  );
};

export default MainRoutes;
