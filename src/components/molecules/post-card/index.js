import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import HeroImage from '@components/atoms/hero-image';

const CardStyled = styled.div`
  ${tw`shadow-lg my-2`};
`

const PostCard = ({ post }) => {
  return (
    <CardStyled>
      <Link to={`/post/${post.fields.slug}`}>
        <HeroImage node={post.frontmatter.hero} props={{ alt: post.frontmatter.title }} />
      </Link>
      <div className="px-4 py-4">
        <Link to={`/post/${post.fields.slug}`} className="block text-black hover:text-grey-darkest font-bold text-lg mb-2 no-underline">{post.frontmatter.title}{" "}</Link>
        <p className="text-grey-darker text-sm">{post.frontmatter.description}{" "}</p>
        <div className="mt-4 text-right">
          <Link to={`/post/${post.fields.slug}`} className="inline-block bg-indigo text-white no-underline py-2 px-3 hover:bg-indigo-dark">More</Link>
        </div>
      </div>
    </CardStyled>
  )
}
 

PostCard.propTypes = {
  post: PropTypes.object
}

PostCard.defaultProps = {
  post: null,
}


export default PostCard
