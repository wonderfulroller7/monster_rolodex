import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleEvent}) => {

    return(
        <input
          className='search'
          type='search'
          placeholder={placeholder}
          onChange={handleEvent}
        />
    )
};