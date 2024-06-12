import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql,Link } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My blog Posts">
      {data.allMdx.edges.map((edge) => (
        <article key={edge.id}>
          <h2>
            <Link to={`/blog/${edge.node.frontmatter.slug}`} >
              {edge.node.frontmatter.title}
            </Link>
          </h2>
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
            slug
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
