import React, { FC } from "react";

import Breadcrumb from "./components/Breadcrumb";

import "./Home.css";

const Home: FC<{}> = () => {
  const items = [
    { title: "Home", to: "/" },
    { title: "Profile", to: "/" },
    { title: "About", to: "/" },
  ];
  return <Breadcrumb items={items} />;
};

export default Home;
