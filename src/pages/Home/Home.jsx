import React, { useState, useRef } from 'react'

import HeaderHome from '../../components/HeaderHome/HeaderHome'
import ContentHome from '../../components/ContentHome/ContentHome'
import Footer from '../../components/Footer/Footer'
import Video from '../../components/Video/Video'

export default props => {
  const [hiddenVideo, setHiddenVideo] = useState(true)

  const refPortfolio = useRef(null) //Referência para a tag section Portfolio
  const refContact = useRef(null) //Referência para a tag section contact

  const showVideo = () => {
    setHiddenVideo(!hiddenVideo)
  }

  return (
    <>
      <HeaderHome refPortfolio={refPortfolio} />
      <ContentHome
        showVideo={showVideo}
        refPortfolio={refPortfolio}
        refContact={refContact}
      />
      <Footer />
      {!hiddenVideo && (
        <Video
          showVideo={showVideo}
          linkVideo='https://player.vimeo.com/video/210849200'
        />
      )}
    </>
  )
}
