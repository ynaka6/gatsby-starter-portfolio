import React from "react"
import { graphql } from 'gatsby'
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Welcome from "@components/organisms/home/welcome"
import About from "@components/organisms/home/about"
import Works from "@components/organisms/home/works"
import Blog from "@components/organisms/home/blog"
import Contact from "@components/organisms/home/contact"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="flex flex-col">
      <Welcome />
      <About />
      <Works />
      <Blog totalCount={data.allMarkdownRemark.totalCount} posts={data.allMarkdownRemark.edges} />
      <Contact />
    </div>
  </Layout>
)

export default IndexPage


export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]},
      limit: 4
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "YYYY.MM.DD"),
            hero {
              publicURL
              childImageSharp {
                fluid(maxWidth: 980) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
