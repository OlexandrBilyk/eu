import React from "react";
import Details from "../components/Details/Details.jsx";
import Info from "../components/Info/Info.jsx";
import Header from "../components/Header/Header.jsx";
import MainNavigation from "../components/MainNavigation/MainNavigation.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <MainNavigation />
      <Info />
      <Details />
    </div>
  );
};

export default Home;
