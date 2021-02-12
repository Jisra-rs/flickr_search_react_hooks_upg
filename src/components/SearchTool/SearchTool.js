import React, { useState } from 'react';
import './searchTool.css';

const SearchTool = props => {

  const { handleSearch } = props

  // State
  const [search, setSearch] = useState('')

  const handleChange = ({ target }) => {
    const { value } = target
    setSearch (value)
  }

  return(
      <>
        <div className="_divSearch">
            <div className="_searchObj">
                <input 
                  type="text" 
                  id="_text_label" 
                  value={ search }
                  onChange={ handleChange }
                  placeholder="Search photos"/>
                <input type="button" id="_search" onClick={ () => handleSearch (search, 1) } value="Search"/>
            </div>
        </div>
      </>
  );
}

export default SearchTool;