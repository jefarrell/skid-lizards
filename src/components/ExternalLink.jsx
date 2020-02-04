import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ExternalLink extends Component {
  render() {
    const { links } = this.props;
    return (
      <div className='links__wrap'>
        <p className='links__title'>From around the web</p>
        {
          links.nodes.map((link, i) => (
            <div className='links__item' key={`${link}-${i}`}>
              <a 
                href={link.data.link_url.url} 
                target="_blank"
              >
              <img 
                src={link.data.link_image.url} 
                alt="" 
                className='links__item__img'
              />
              </a>
              <div className='links__item__info'>
                <p className='links__item__title'>
                  { link.data.link_title.text}
                </p>
                <a 
                  href={link.data.link_url.url} 
                  target="_blank"
                  className='links__item__url'
                >
                  READ
                </a>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}