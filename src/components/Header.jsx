import React, { Component } from 'react';
import Icon from './LogoSvg';
import { graphql, Link, StaticQuery } from 'gatsby';

const PureHeader = ({children, data}) => {

  return (
    <nav className={'header-nav__wrap'}>
      <Link to='/'><Icon /></Link>
      <Link to='/about' className='header-nav__link'>About</Link>
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
