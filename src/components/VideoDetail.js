import React from 'react'

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={`https://www.youtube.com/embed/${video.id.videoId}`} />

        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/pS-DQRzFLLA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail