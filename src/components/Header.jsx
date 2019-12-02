import React, { Component } from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import kebabCase from 'lodash/kebabCase'

const PureHeader = ({children, data}) => {
  const uidArr = data.allUIDs.nodes;
  const randomUID = uidArr[Math.floor(Math.random()*uidArr.length-1)]

  const [isOpen, toggleIsOpen] = React.useState(false);
  const setToggleIsOpen = () => toggleIsOpen(!isOpen);

  return (
    <nav className={isOpen ? 'header__nav__wrap -open': 'header__nav__wrap'} onClick={setToggleIsOpen}>
    
    </nav>
  )
}

class Header extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
        query HeaderQuery {
          allUIDs: allPrismicPost {
            nodes {
              uid
            }
          }
        }
      `}
      render={data=>(
        <PureHeader {...this.props} data={data}>
          {this.props.children}
        </PureHeader>
      )}
      />
    )
  }
}

export default Header
