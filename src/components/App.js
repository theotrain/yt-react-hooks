import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
// import youtube from '../apis/youtube.js'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {
  // state = { videos: [], selectedVideo: null }

  // const [ videos, setVideos ] = useState([])
  const [ selectedVideo, setSelectedVideo ] = useState(null)
  const [videos, searchVideos] = useVideos('pigs')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  // const onSearchSubmit = async (term) => {
  //   console.log('we got the term ' + term + ' in out App component! new');
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: term
  //     }
  //   })
  //   setVideos(response.data.items)
  // }

  // componentDidMount() {
  //   this.onSearchSubmit('cats')
  // }

  // useEffect(() => {
  //   onSearchSubmit('cats')
  // }, [])

  // const onVideoSelect = (video) => {
  //   console.log('we got the video returned to App!!!: ' + video.id.videoId)
  //   // this.setState({selectedVideo: video})
  //   setSelectedVideo(video)
  // }

  // const showQuantity = () => {
  //   if (videos.length > 0) {
  //     return `I have ${videos.length} videos`
  //   } else {
  //     return "No videos"
  //   }
  // }

  return (
    <div className="ui container">
      <SearchBar onSubmit={searchVideos} />
      {/* {this.showQuantity()} */}
      <div className="ui grid">
        <div className="ui row">
          <div className="nine wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="seven wide column">
            <VideoList onVideoSelect={video => setSelectedVideo(video)} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App