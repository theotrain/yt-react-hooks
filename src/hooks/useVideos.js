import { useEffect, useState } from 'react'
import youtube from '../apis/youtube.js'

const useVideos = (defaultSearchTerm) => {
// accept a term as an input and return a list of videos
// and a function that can be used to search for videos
  const [ videos, setVideos ] = useState([])

  useEffect(() => {
    search(defaultSearchTerm)
  }, [defaultSearchTerm])

  const search = async (term) => {
    console.log('we got the term ' + term + ' in out App component! new');
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    setVideos(response.data.items)
  }

  return [videos, search]
}

export default useVideos