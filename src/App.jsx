import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Bill from "./pages/Bill";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bill />} />

        <Route path="bill" element={<Bill />} />
      </Routes>
    </BrowserRouter>
  );
}
