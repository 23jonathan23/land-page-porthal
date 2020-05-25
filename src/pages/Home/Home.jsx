import React, { useState } from 'react'

import HeaderHome from '../../components/HeaderHome/HeaderHome'
import ContentHome from '../../components/ContentHome/ContentHome'
import Footer from '../../components/Footer/Footer'
import Video from '../../components/Video/Video'

export default props => {
  const [hiddenVideo, setHiddenVideo] = useState(true)

  const showVideo = () => {
    setHiddenVideo(!hiddenVideo)
  }

  return (
    <>
      <HeaderHome />
      <ContentHome showVideo={showVideo} />
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
