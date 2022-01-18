import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Single from "./components/Episodes/Single";
import Create from "./components/Characters/Create";
import EpisodeState from "./context/Episode/EpisodeState";


function Router() {
  return (
    <>
      
        <EpisodeState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="characters" element={<Characters />} />
                <Route path="characters/:id" element={<Single />} />
                <Route path="characters/crear" element={<Create />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </EpisodeState>
      
    </>
  );
}

export default Router;
