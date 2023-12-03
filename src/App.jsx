import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "./style/main.scss";
import Services from "./pages/services/Services";
import Prices from "./pages/prices/Prices";
import Works from "./pages/works/Works";
import Index from "./Index";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />}></Route>
            <Route path="services" element={<Services />}></Route>
            <Route path="prices" element={<Prices />}></Route>
            <Route path="works" element={<Works />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
