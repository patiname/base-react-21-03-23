import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { PageNotFound } from "./components/PageNotFound";
import { Sub01 } from "./components/Sub01";

export const RouterDom = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub01/*" element={<Sub01 />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
