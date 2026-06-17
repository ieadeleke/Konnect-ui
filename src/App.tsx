import { Routes, Route } from "react-router-dom";
import DisplayLayout from "./layout/DisplayLayout";
import HomePage from "./pages/home";
import BusinessPage from "./pages/business";
import RidePage from "./pages/ride";
import AmbassadorsPage from "./pages/ambassadors";

function App() {
  return (
    <Routes>
      <Route element={<DisplayLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/ride" element={<RidePage />} />
        <Route path="/ambassadors" element={<AmbassadorsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
