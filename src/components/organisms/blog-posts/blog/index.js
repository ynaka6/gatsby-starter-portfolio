import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import InViewMonitor from 'react-inview-monitor';
import SectionTitle from "@components/atoms/section_title";
import PostCard from '@components/molecules/post-card';

const Section = styled.section`
  ${tw`w-full bg-white`};
`

const Blog = ({ posts, pageContext }) => {
  const prevPage = pageContext.currentPage > 1 ? (
    <Link
      to={`${ pageContext.currentPage - 1 === 1 ? 'posts' : 'posts/' + (pageContext.currentPage - 1)}`}
      className="text-grey-darkest font-bold bg-grey-lighter hover:bg-grey-light border border-grey-darkest rounded-full py-2 px-8 no-underline"
      rel="prev"
    >
      前のページへ
    </Link>
  ) : null

  const nextPage = pageContext.numPages > pageContext.currentPage ? (
    <Link
      to={`posts/${pageContext.currentPage + 1}`}
      className="text-grey-darkest font-bold bg-grey-lighter hover:bg-grey-light border border-grey-darkest rounded-full py-2 px-8 no-underline"
      rel="next"
    >
      次のページへ
    </Link>
  ) : null

  return (
    <Section>
      <InViewMonitor
        classNameNotInView='inview-section-hidden'
        classNameInView='inview-section-active'
      >
        <div className="container mx-auto">
          <SectionTitle title={`Blog`} subtitle="最新記事一覧" />
          <div className="lg:flex justify-center w-full mt-6 mb-10">

            {posts.map(({ node }) => (
              <div key={node.fields.slug} className="mx-2 lg:flex lg:w-1/4">
                <PostCard post={node} />
              </div>
            ))}

          </div>
          <div className="flex justify-between mb-10">
            <div>
              {prevPage}
            </div>
            <div>
              {nextPage}
            </div>
          </div>
        </div>
      </InViewMonitor>
    </Section>
  )
}

export default Blog
