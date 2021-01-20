import axios from 'axios'

const KEY = 'AIzaSyCvJGgXgJ5w0Ci1mQIIAGfKVld0qKZXM4c'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
})

