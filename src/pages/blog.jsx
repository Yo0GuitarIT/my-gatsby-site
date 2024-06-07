import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My blog Posts">
      {data.allMdx.edges.map((edge) => (
        <article key={edge.id}>
          <h2>{edge.node.frontmatter.title}</h2>
          <p>Posted: {edge.node.frontmatter.date}</p>
          <p>{edge.node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM D,YYYY")
            title
          }
          id
          excerpt
        }
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;
export default BlogPage;
