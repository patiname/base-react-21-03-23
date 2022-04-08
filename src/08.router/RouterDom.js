import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { api } from "../db";
import { Home } from "./components/Home";
import { PageNotFound } from "./components/PageNotFound";
import { Sub } from "./components/sub/Sub";
// import { Sub01 } from "./components/sub/Sub01";
// import { Sub02 } from "./components/sub/Sub02";

export const RouterDom = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sub01/*"
          element={<Sub title={api[0].title} desc={api[0].desc} />}
        />
        <Route
          path="/sub02/*"
          element={<Sub title={api[1].title} desc={api[1].desc} />}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};
