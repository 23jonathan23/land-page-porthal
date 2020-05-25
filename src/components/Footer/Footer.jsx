import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaHeart,
} from 'react-icons/fa'

import './Footer.css'

import Text from './Text/Text'
import Contact from './Contact/Contact'
import SocialMedia from './SocialMedia/SocialMedia'
import Development from './Development/Development'

export default props => {
  return (
    <section className='footer bg-gray'>
      <div className='container'>
        <div className='row group-description-footer'>
          <Text
            title='Texto 1'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
            pulvinar vestibulum. Donec eleifend, sem dictum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum.
            Donec eleifend, sem dictum.'
          />
          <Text
            title='Texto 2'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
            pulvinar vestibulum. Donec eleifend, sem dictum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum.
            Donec eleifend, sem dictum.'
          />
          <Contact />
        </div>
        <hr />
        <div className='row group-development-footer'>
          <div className='col-md-12 col-lg-4'>
            <ul className='group-social-media'>
              <SocialMedia Icon={FaTwitter} url='/' />
              <SocialMedia Icon={FaFacebookF} url='/' />
              <SocialMedia Icon={FaGooglePlusG} size='30' url='/' />
              <SocialMedia Icon={FaLinkedinIn} url='/' />
            </ul>
          </div>
          <Development
            Icon={FaHeart}
            textDev='PORTHAL SISTEMAS'
            url='https://www.porthal.com.br/'
            textCop='©2020 SITE.COM'
          />
        </div>
      </div>
    </section>
  )
}
