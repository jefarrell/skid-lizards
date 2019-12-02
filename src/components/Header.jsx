import React, { Component } from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import kebabCase from 'lodash/kebabCase'

const PureHeader = ({children, data}) => {
  const tagArr = data.tags;
  const uidArr = data.allUIDs.nodes;
  const randomUID = uidArr[Math.floor(Math.random()*uidArr.length-1)]

  const [isOpen, toggleIsOpen] = React.useState(false);
  const setToggleIsOpen = () => toggleIsOpen(!isOpen);

  return (
    <nav className={isOpen ? 'header__nav__wrap -open': 'header__nav__wrap'} onClick={setToggleIsOpen}>
      <div className={isOpen ? 'header__nav -open': 'header__nav'}>
        <Link to="/all" aria-label="Back to Home" className='header__nav__latest'>Latest</Link>
        <Link to="/" className='header__nav__title' onClick={setToggleIsOpen}>
          <span>O</span>
          <span>F</span>
          <span>F</span>
          <span>C</span>
          <span>E</span>
          <span>N</span>
          <span>T</span>
          <span>E</span>
          <span>R</span>
        </Link>
        <Link to="/about" aria-label="About page" className='header__nav__about'>About</Link>
      </div>
      <div className={isOpen ? 'header__nav__expanded -open': 'header__nav__expanded'} onClick={setToggleIsOpen}>
        <div className='header__nav__expanded--test'>
        <div className='header__nav__expanded--links'>
          <Link to="/all" aria-label="Latest Posts">Latest</Link>
          <Link to={musicPost ? `/${musicPost.edges[0].node.uid}` : ""} aria-label="Mix of the Week">Mix of the Week</Link>
          <Link to={randomUID ? `/${randomUID.uid}` : ""} aria-label="Random article">Random Read</Link>
        </div>
        <div className='header__nav__expanded--center'>
          <Link to="/" className='header__nav__expanded--title'>
            <span>O</span>
            <span>F</span>
            <span>F</span>
            <span>C</span>
            <span>E</span>
            <span>N</span>
            <span>T</span>
            <span>E</span>
            <span>R</span>
          </Link>
          </div>
        <div>
          <Link 
            to="/about" 
            aria-label="About page"
            className='header__nav__expanded--about'
          >
            About
          </Link>
        </div>
      </div>
      <div className='header__nav__expanded--groupings'>
          <div className='header__nav__tags'>
            <span className='header__nav__tags--title'>Type</span>
            <ul className='header__nav__tags--list'>
              {
                tagArr.edges.map((t, i) => {
                  const tag = t.node.data.name
                  // Only showing 5 tags for now due to spacing
                  return i < 5 && (
                    <li 
                      key={`${tag}-${i}`}
                      className='header__nav__tag'
                    >
                      <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className='header__nav__categories'>
            <span className='header__nav__categories--title'>Category</span>
            <ul className='header__nav__categories--list'>
            </ul>
          </div> 
        </div>
      </div>
    </nav>
  )
}

class Header extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
        query HeaderQuery {
          tags: allPrismicTag {
            edges {
              node {
                data {
                  name
                }
              }
            }
          }
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
