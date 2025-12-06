import { Routes, Route } from "react-router-dom";
import Homesec from "./mainsec";
import History from "./pages/history";
import Teritory from "./pages/teritory";
import Umkm from "./pages/umkm";
import Potential from "./pages/potential";
import Culture from "./pages/culture";
import TogaPage from "./pages/toga";


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homesec />} />
      <Route path="/history" element={<History />} />
      <Route path="/teritory" element={<Teritory />} />
      <Route path="/potential" element={<Potential />} />
      <Route path="/umkm" element={<Umkm />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/toga" element={<TogaPage />} />

   
    </Routes>
  );
}
