import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import rehypeReact from "rehype-react"
import Iframely from "@components/atoms/iframely"

const ContentStyled = styled.div`
  ${tw`p-4 leading-normal`};

  a[target="_blank"]:not(.gatsby-resp-image-link)::after {
    content: '';
    display: inline-block;
    top: 0em;
    left: 0em;
    width: 0.8em;
    height: 0.8em;
    background-image: url('data:image/svg+xml;utf8,<svg color="cornflowerblue" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 1792 1792" fill="currentColor"><path d="M1408 928v320q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-320q0-14 9-23t23-9h64q14 0 23 9t9 23zm384-864v512q0 26-19 45t-45 19-45-19l-176-176-652 652q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l652-652-176-176q-19-19-19-45t19-45 45-19h512q26 0 45 19t19 45z"></path></svg>');
    background-size: 0.8em 0.8em;
    ${tw`mx-1 bg-color`};
  }

  h2 {
    ${tw`my-2`};

    &:first-child {
      ${tw`text-center`};

      & + ul {
        margin-top: -4rem;
        ${tw`pt-20 pb-5 pl-10 mb-10 ml-0 bg-grey-lightest border leading-loose`};
      }
    }

    &:not(first-child) {
      ${tw`mt-8`};
    }  
  }
  h3 {
    ${tw`my-2`};
  }

  p, ul {
    ${tw`mb-4`};
  }

  blockquote {
    ${tw`relative italic text-grey-dark bg-grey-lighter mb-4 py-4 px-10`};

    &:before {
      content: '"';
      ${tw`inline-block absolute text-grey-darker text-3xl pin-t pin-l pl-4 pt-2`};
    }

    p {
      ${tw`p-0 mt-4`};
    }
  }

  .gatsby-highlight {
    ${tw`mb-10`};
  }
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "iframely": Iframely },
}).Compiler

const PostContent = ({ post }) => {
  return (
    <ContentStyled>{renderAst(post.htmlAst)}</ContentStyled>
  )
}
 

PostContent.propTypes = {
  post: PropTypes.object
}

PostContent.defaultProps = {
  post: null,
}


export default PostContent
