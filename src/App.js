import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { AllMeetups } from "./pages/AllMeetups";
import { Favorites } from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
};

export default App;
