import React, { Component } from "react"

import Loading from "./Loading"
import VideoPlayer from "./VideoPlayer"

class VideoContainer extends Component {
  state = {
    isMounted: false,
    imageUrl:
      "https://s3.us-east-2.amazonaws.com/dentemple/dentemple.com/busy-people.jpg",
    videoUrl:
      "https://s3.us-east-2.amazonaws.com/dentemple/dentemple.com/busy-people.mp4"
  }

  componentDidMount() {
    this.setState({ isMounted: true })
  }

  render() {
    const { isMounted, ...rest } = this.state

    return (
      <main>
        <h2>Video</h2>
        {isMounted ? <VideoPlayer {...rest} /> : <Loading />}
      </main>
    )
  }
}

export default VideoContainer
