import React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creater of this site, which I build with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>

export default AboutPage;
