import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Characters from "./components/Characters";
import Single from "./components/Episodes/Single";
import EpisodeState from "./context/Episode/EpisodeState";

function Router() {
  return (
    <>
      <EpisodeState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Characters />} />
              <Route path="characters" element={<Characters />} />
              <Route path="characters/:id" element={<Single />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </EpisodeState>
    </>
  );
}

export default Router;
