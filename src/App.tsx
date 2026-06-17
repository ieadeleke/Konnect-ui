import { Routes, Route } from "react-router-dom";
import DisplayLayout from "./layout/DisplayLayout";
import HomePage from "./pages/home";
import BusinessPage from "./pages/business";
import RidePage from "./pages/ride";
import AmbassadorsPage from "./pages/ambassadors";
import ContactPage from "./pages/contact";
import SignupPage from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route element={<DisplayLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/ride" element={<RidePage />} />
        <Route path="/ambassadors" element={<AmbassadorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>
    </Routes>
  );
}

export default App;
