import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = () => {
  return (
    <Layout pageTitle="My blog Posts">
      <p>My Cool posts will go in here</p>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
