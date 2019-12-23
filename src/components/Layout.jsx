/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Footer from './Footer';
import SkipNavLink from './SkipNavLink';
import Main from '../utils/app';

const PureLayout = ({ children, data, customSEO }) => (
    <div className='layout__wrap'>
      <SkipNavLink />
      {children}
      <Main />
    </div>
);

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            footer: prismicFooter {
              data {
                contact_text {
                  text
                }
                contact_email {
                  text
                }
                copyright_text {
                  text
                }
                follow_text {
                  text
                }
                follow_link {
                  text
                }
                top_text {
                  text
                }
              }
            }
          }
        `}
        render={data => (
          <PureLayout {...this.props} data={data}>
            {this.props.children}
          </PureLayout>
        )}
      />
    );
  }
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

PureLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  data: PropTypes.object.isRequired,
}
