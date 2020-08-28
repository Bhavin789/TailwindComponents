import React from "react";

import arrow from "./arrow.svg";

import { Link } from "react-router-dom";

import "./Home.css";

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <nav className="text-black font-bold my-8" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link to="/">Home</Link>
            <span className="fill-current w-3 h-3 mx-3">
              <img src={arrow} alt={arrow} />
            </span>
          </li>
          <li className="flex items-center">
            <Link to="/">Info</Link>
            <span className="fill-current w-3 h-3 mx-3">
              <img src={arrow} alt={arrow} />
            </span>
          </li>
          <li>
            <Link to="/" className="text-gray-500" aria-current="page">
              About
            </Link>
          </li>
        </ol>
      </nav>
    );
  }
}

export default Home;
