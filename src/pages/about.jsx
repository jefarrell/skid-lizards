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
    return (
      <div className='about'>
        <Header />
          <div className='about__wrap'>
            <div className='about__intro'>
              <p className='about__intro__text'
                dangerouslySetInnerHTML={{ __html: aboutpage.data.about_content.html }}
              />
            </div>
            <div className='about__info'>
              <div className='about__info__contact'>
                <span className='about__info__title -contact'>Contact</span>
                <div className='about_info__contact--wrap'>
                  <p className='about__info__contact--text' 
                    dangerouslySetInnerHTML={{ __html: aboutpage.data.contact.html }} 
                  />
                  <p className='about__info__email--text' 
                    dangerouslySetInnerHTML={{ __html: aboutpage.data.email.html }}
                  />
                </div>
              </div>
              <div className='about__info__social'>
                <div className='about__info__insta'>
                  <span className='about__info__title -insta'>Instagram</span>
                  <p className='about__info__insta--text' 
                    dangerouslySetInnerHTML={{ __html: aboutpage.data.instagram_handle.html }}
                  />
                </div>
              </div>
            </div>
            <div>
            <span className='about__foot__title'>OFFCENTER</span>
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
        contact: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }),
        email: PropTypes.shape({
          html: PropTypes.string.isRequired,
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
        contact {
          html
        }
        email {
          html
        }
        instagram_handle {
          html
        }
      }
    }
  }
`