import React, { Component } from "react"
import PropTypes from "prop-types"
import { DefaultPlayer as Video } from "react-html5video"

class VideoPlayer extends Component {
  static propTypes = {
    imageUrl: PropTypes.string,
    videoUrl: PropTypes.string
  }

  render() {
    const { imageUrl, videoUrl } = this.props

    return (
      <Video
        loop
        muted
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        poster={imageUrl}
        width="70%"
      >
        <source src={videoUrl} type="video/mp4" />
      </Video>
    )
  }
}

export default VideoPlayer
