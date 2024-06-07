import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My blog Posts">
      <ul>
        {data.allFile.edges.map((element) => (
          <li key={element.node.name}>{element.node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export const query = graphql`
  query {
    allFile(filter: { extension: { in: ["md", "mdx"] } }) {
      edges {
        node {
          name
        }
      }
    }
  }
`;

export default BlogPage;
