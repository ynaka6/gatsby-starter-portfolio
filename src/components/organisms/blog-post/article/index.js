import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"
import InViewMonitor from 'react-inview-monitor';
import HeroImage from '@components/atoms/hero-image';
import PostContent from '@components/molecules/post-content';


const ArticleStyled = styled.article`
  ${tw`lg:w-2/3 mx-auto bg-white border shadow-lg`};

  & > hr {
    ${tw`border-b mt-0`};
  }

  & > .time {
    ${tw`pt-4 pl-4 text-grey-darkest text-sm`};
  }

  & > h1 {
    ${tw`my-2 pr-2 pl-4 py-1 text-2xl leading-tight`};
  }

  & > .description {
    ${tw`px-4 my-4 text-sm text-grey-darkest leading-normal`};
  }
`

const ArticleSection = ({ post, previous, next}) => (
  <InViewMonitor
    classNameNotInView='inview-section-hidden'
    classNameInView='inview-section-active'
  >
    <ArticleStyled>
      <p className="time">
        <time>
          {post.frontmatter.date}
        </time>
      </p>
      <h1>{post.frontmatter.title}</h1>
      <p className="description">{post.frontmatter.description}</p>
      <HeroImage node={post.frontmatter.hero} props={{ alt: post.frontmatter.title }} />
      <hr/>
      <PostContent post={post} />
      <hr/>
      <ul className="list-reset p-4 flex justify-between items-center">
        <li className="w-1/2">
          {previous && (
            <Link to={`post/${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li className="w-1/2">
          {next && (
            <Link to={`post/${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </ArticleStyled>
  </InViewMonitor>
)

export default ArticleSection
