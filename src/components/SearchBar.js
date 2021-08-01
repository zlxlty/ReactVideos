/*
 * @Author: Tianyi Lu
 * @Description: 
 * @Date: 2021-07-26 13:51:58
 * @LastEditors: Tianyi Lu
 * @LastEditTime: 2021-07-31 20:14:33
 */

import React, { useState } from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onInputChange = event => {
    setTerm(event.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();

    props.onFormSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search for Videos</label>
          <input 
            type="text"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
