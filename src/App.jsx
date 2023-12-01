import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
