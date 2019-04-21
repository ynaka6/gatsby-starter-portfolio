import React from 'react'
import { graphql } from 'gatsby'

import SEO from "@components/seo"
import Layout from "@components/templates/layout"
import Breadcrumb from "@components/molecules/breadcrumb"
import ArticleSection from "@components/organisms/blog-post/article"
import ProfileSection from "@components/organisms/blog-post/profile"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div className="container mx-auto mt-20">
          <div className="flex flex-col justify-center">
            <Breadcrumb breadcrumbs={[
              { to: '/', label: 'Home' },
              { to: `/post/${post.fields.slug}`, label: post.frontmatter.title, active: true },
            ]}
            />
            <ArticleSection post={post} previous={previous} next={next} />
            <ProfileSection />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      excerpt(pruneLength: 160)
      htmlAst
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
`