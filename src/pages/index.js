import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import Quote from "../components/about/quote";
import Skills from "../components/skills/skills";
import Websites from "../components/websites/websites";
import GraphicDesign from "../components/graphics/graphics";
import Testimonials from "../components/testimonials/testimonials";
import Contact from "../components/contact/contact";
import BackToTopBtn from "../components/backToTopBtn";

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Dan Mathisen - Full-stack web application developer</title>
		<meta property="og:title" content="Dan Mathisen - Full-stack web developer" />
		<meta property="og:description" content="I build elegant and eye-catching websites that provide a simple and intuitive user experience" />
		<meta property="og:image" content="/android-chrome-512x512.png" />
		<meta property="og:url" content="https://danmathisen.com" />
      </Helmet>

      <Quote />
      <Skills />
      <Websites />
      <GraphicDesign />
      <Testimonials />
      <Contact />
      <BackToTopBtn />
    </Layout>
  );
};
