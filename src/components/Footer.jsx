import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './LogoSvg';
import { Link } from 'gatsby';

class Footer extends Component {
  
  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    const { 
      data
    } = this.props;

    return (
      <footer className='footer'>
          <a className='footer__contact--text' href={`mailto:${data.contact_email.text}`}>{ data.contact_text.text }</a>
          <Link to="/"><Icon /></Link>
          <a className='footer__follow--text' href={data.follow_link.text} target="_blank" rel="noopener noreferrer">
            { data.follow_text.text }
          </a>
      </footer>
    );
  }
}

export default Footer;

Footer.propTypes = {
  data: PropTypes.shape({
    contact_text: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
    contact_email: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
    copyright_text: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
    follow_text: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
    follow_link: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
    newsletter_text: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
    top_text: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  }),
}
