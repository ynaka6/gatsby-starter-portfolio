import React from "react"
import { graphql } from 'gatsby'
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Breadcrumb from "@components/molecules/breadcrumb"
import Blog from "@components/organisms/blog-posts/blog"


class BlogPostsTemplate extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="記事一覧" keywords={[`gatsby`, `application`, `react`]} />
        <div className="container mx-auto mt-20">
          <div className="flex flex-col">
            <Breadcrumb breadcrumbs={[
                { to: '/', label: 'Home' },
                { to: '/posts', label: '記事一覧', active: true },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Blog posts={this.props.data.allMarkdownRemark.edges} pageContext={this.props.pageContext} />
        </div>
      </Layout>
    )
  }
}

export default BlogPostsTemplate

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
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
        }
      }
    }
  }
`
