import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Header } from '../components'
import Main from '../utils/app';
import '../styles/index.scss';

class About extends Component {
  render() {
    const {
      data: { aboutpage },
    } = this.props
    console.log(this.props)
    return (
      <div className='about'>
        <Header />
          <div className='about__wrap'>
            <div className='about__intro'>
              <img 
                className='about__intro__img'
                src={aboutpage.data.hero_image.url} 
                alt={aboutpage.data.hero_image.alt}
                />
              <div className='about__info'>
                <p className='about__info__text'
                  dangerouslySetInnerHTML={{ __html: aboutpage.data.about_content.html }}
                />
                <p className='about__info__insta--text' 
                  dangerouslySetInnerHTML={{ __html: aboutpage.data.instagram_intro_text.html }}
                />
                <a 
                  href={`mailto:${aboutpage.data.email.text}`}
                  className='about__info__email--text'>
                  Send an email, say hi!
                </a>
              </div>
            </div>
          </div>
        <Main />
      </div>
    )
  }
}

export default About

About.propTypes = {
  data: PropTypes.shape({
    aboutpage: PropTypes.shape({
      data: PropTypes.shape({
        content: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }),
        email: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        instagram_handle: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }),
      }),
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query AboutQuery {
    aboutpage: prismicAboutPage {
      data {
        about_content {
          html
        }
        hero_image {
          url
          alt
        }
        email {
          text
        }
        instagram_intro_text {
          html
        }
      }
    }
  }
`