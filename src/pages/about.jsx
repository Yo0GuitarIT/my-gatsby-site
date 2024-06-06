import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creater of this site, which I build with Gatsby.
      </p>
      <StaticImage
        alt="test image"
        src="../images/test.jpg"
        placeholder="blurred"
      />
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
