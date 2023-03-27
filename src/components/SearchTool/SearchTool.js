import React, { useState } from 'react';
import './searchTool.css';

const SearchTool = props => {

  const { handleSearch } = props

  // State
  const [search, setSearch] = useState('')

  const handleChange = ( ev ) => {
    setSearch (ev.value)
    console.log(setSearch)
  }

  return(
      <>
      <form onSubmit={ ev => { ev.preventDefault(); handleSearch(search, 1)}}>
          <div className="_divSearch">
              <div className="_searchObj">
                  <input 
                    type="text" 
                    id="_text_label" 
                    value={ search }
                    onChange={ handleChange }
                    placeholder="Search photos"/>
                  <input type="submit" id="_search" value="Search"/>
              </div>
          </div>
        </form>
      </>
  );
}

export default SearchTool;