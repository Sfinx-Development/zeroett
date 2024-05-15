import { Route, Routes } from "react-router-dom";
import Index from "./Index";
import RootLayout from "./RootLayout";

const Navigation = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
