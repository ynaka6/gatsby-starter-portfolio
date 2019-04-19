import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

const HeaderNav = styled.header`
  transition: all 500ms ease;
  background-color: rgba(255, 255, 255, 0);
  ${tw`fixed w-full z-50`};

  &.active {
    transition: all 500ms ease;
    background-color: rgba(255, 255, 255, 0.9);
    ${tw`shadow-md`};
  }
`

const Header = ({ siteTitle, scrollY }) => (
  <HeaderNav
    className={[ scrollY > 60 ? 'active' : '' ].join(' ')}
  >
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-5 px-4 lg:px-5">
        <div>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              className="logo"
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div>
        </div>
      </div>
    </div>
  </HeaderNav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  scrollY: PropTypes.number,
}

Header.defaultProps = {
  siteTitle: ``,
  scrollY: 0,
}


export default Header
