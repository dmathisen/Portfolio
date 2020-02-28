import React from "react";
import { Helmet } from "react-helmet";

import Footer from "./footer";
import Navbar from "./navbar";
import Waves from "./waves";

import "./layout.css";

export default ({ children }) => {
  return (
    <>
      <Helmet>
		  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
		  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
		  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
		  
		  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
		  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
		  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </Helmet>

      <header id="top">
        <Navbar />
        <Waves />
      </header>

      {children}

      <Footer />
    </>
  );
};
