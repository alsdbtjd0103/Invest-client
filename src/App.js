import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MainAddress } from "./Address/MainAddress.js";
import ChartPage from "./pages/ChartPage.js";
import MainPage from "./pages/MainPage.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={MainAddress} element={<MainPage />}></Route>
          <Route path={MainAddress+'/chart'} element={<ChartPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
