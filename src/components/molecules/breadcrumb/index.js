import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"


const BreadcrumbStyled = styled.div`
  ${tw`lg:w-2/3 lg:mx-auto overflow-x-scroll whitespace-no-wrap`};

  & > .container {
    ${tw`mx-auto h-full`};

    ol.breadcrumb {
      ${tw`list-reset flex text-grey-dark px-4 py-5 overflow-x-scroll whitespace-no-wrap`};

      &::-webkit-scrollbar {
        ${tw`hidden`};
      }

      & > li {
        ${tw`flex items-center`};

        & + li:before {
          content: '\\0227B';
          ${tw`mx-2`};
        }

        a {
          ${tw`font-bold text-blue no-underline`};
        }

        span {
          ${tw`text-black`};
        }
      }
    }
  }
`

const Breadcrumb = ({ breadcrumbs }) => (
  <BreadcrumbStyled>
    <div className="container">
      <nav>
        <ol className="breadcrumb">
          {breadcrumbs.map((value, index) => {
            return (
              value.active ? (
                <li key={index}>
                  <span>{value.label}</span>
                </li>
              ) : (
                <li key={index}>
                  <Link to={value.to}>{value.label}</Link>
                </li>
              )        
            )
          })}
        </ol>
      </nav>
    </div>
  </BreadcrumbStyled>
)
 

Breadcrumb.propTypes = {
    breadcrumbs: PropTypes.array
}

Breadcrumb.defaultProps = {
    breadcrumbs: [],
}


export default Breadcrumb
