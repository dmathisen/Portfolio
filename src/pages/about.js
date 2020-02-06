import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import Layout from "../components/layout";

export default props => {
  return (
    <Layout>
      <Helmet>
        <title>Dan Mathisen - About</title>
      </Helmet>

      <h1>About Page</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
};
