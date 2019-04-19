import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

const TagsStyle = styled.ul`
  ${tw`list-reset flex text-sm`};
  
  & > li:not(:last-child) {
    ${tw`mr-2`};

    &:after {
        content: '/';
        ${tw`ml-2`};
    }
  }
`

const Tags = ({ tags }) => {
  if (!tags || tags.length === 0) return

  return (
    <TagsStyle>
      {tags.map((value, index) => {
        return <li key={index} className="mr-1">{value}</li>
      })}
    </TagsStyle>
  )
}
 

Tags.propTypes = {
    tags: PropTypes.array
}

Tags.defaultProps = {
    tags: [],
}


export default Tags
