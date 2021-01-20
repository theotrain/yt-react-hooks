import React, { useState } from 'react'

const SearchBar = ({onSubmit}) => {
  // state = { term: '' }
  const [ term, setTerm ] = useState('')

  const onFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(term)
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search 4 a video</label>
          <input type="text" value={term} onChange={event => setTerm(event.target.value)} />
        </div>
      </form>
    </div>
  )
}

export default SearchBar