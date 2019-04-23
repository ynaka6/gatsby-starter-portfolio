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

const Blog = (props) => {
  if (0 === props.totalCount) {
    return null
  }
  return (
    <Section>
      <InViewMonitor
        classNameNotInView='inview-section-hidden'
        classNameInView='inview-section-active'
      >
        <div className="container mx-auto mt-20">
          <SectionTitle title={`Blog`} subtitle="最新記事一覧" />
          <div className="lg:flex justify-center w-full mt-6 mb-10">

            {props.posts.map(({ node }) => (
              <div key={node.fields.slug} className="mx-2 lg:flex lg:w-1/4">
                <PostCard post={node} />
              </div>
            ))}

          </div>
          <div className="flex justify-center">
            <Link to="/posts" className="my-10 py-4 px-20 text-grey-darkest bg-grey-lighter hover:bg-grey-light font-bold border border-grey-darkest rounded-sm no-underline">記事一覧へ</Link>
          </div>
        </div>
      </InViewMonitor>
    </Section>
  )
}

export default Blog
