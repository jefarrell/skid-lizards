import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { string } from 'postcss-selector-parser';

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
      <footer className='footer -observe'>
        <div className='footer__left'>
          <span className='footer__copyright--text'>{ data.copyright_text.text }</span>
          <a className='footer__contact--text' href={`mailto:${data.contact_email.text}`}>{ data.contact_text.text }</a>
          <a className='footer__follow--text' href={data.follow_link.text} target="_blank">{ data.follow_text.text }</a>
        </div>
        <div className='footer__right' onClick={this.scrollTop}>
          <span className='footer__top--text'>{ data.top_text.text }</span>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79 78">
            <defs>
              <image id="image-2" width="19" height="78" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAABOCAYAAADCQC3lAAAACXBIWXMAAAsSAAALEgHS3X78AAAB2klEQVRYR+2YT0scMRiHn12XQkU6lDn4hyK2Ii0Fj4VSitBrS4s3W7Tr1zAHz/M1PPmBWnrWHgSlG7rx5h+Ih5nR2cw7iVkvHvLAwiT55dk3m8kMLNZaQp+90Xg/lLHW0rPW4kNp8wb4DSwVefbPl+37BiuGwAD4Hgp6ZUqbPrBdNX/6shCubANYrq7fKW1e+8IhmVvNjpiq6NwApc1T4BR41ug+Bl4VeSZO8lX2jUkRwArwsR0t8cl2O/o7N0JcptJmHjgBZlqDYID5Is8u3IGuyn4giwAyyp+gRZcsdE+Ju9paptLmLfBHCje4BhaKPNPNTqmyUFVQHq8tt3NCVh0f743ZoPWlbmWfgBduqIP3Spu1Zocru88Sm0ys4nYDlDazwBkwJ0zq4ghYrY9Xs7JN4kQAL4EPdaMpi11izbC+6FlrUdosUB6f0CNJ4j+wWOTZRT15m+lEAM+Bz3AnmHaJNUOA3t5ovA78CoRDXAKLfR5eFcATYGsAfKF8RklkTtsC51IQ+Op9CStt3MG/RZ6tSFmYfgdFkiyeJIsnyeJJsniSLJ4kiyfJ4kmyeJIsniSLJ8niebyyQWDc/cPtUkxVhGRnTnskpipCskOnPRZTFSHZgdO+kkI1N2xZmrdFuGLeAAAAAElFTkSuQmCC" />
            </defs>
            <title>arrowstop</title>
            <g id="Vector_Smart_Object_copy_4" data-name="Vector Smart Object copy 4">
              <use id="image" className="cls-1" xlinkHref="#image-2" />
            </g>
            <g id="Vector_Smart_Object_copy_8" data-name="Vector Smart Object copy 8">
              <use id="image-3" data-name="image" className="cls-1" transform="translate(30)" xlinkHref="#image-2" />
            </g>
            <g id="Vector_Smart_Object_copy_14" data-name="Vector Smart Object copy 14">
              <use id="image-4" data-name="image" className="cls-1" transform="translate(60)" xlinkHref="#image-2" />
            </g>
          </svg>
        </div>
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
