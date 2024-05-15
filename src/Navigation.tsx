import { Route, Routes } from "react-router-dom";
import Index from "./Index";
import RootLayout from "./RootLayout";
import ContactPage from "./ContactPage";


const Navigation = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Index />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
