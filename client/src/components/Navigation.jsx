import React from 'react';
import Search from './Search.jsx';

const Navigation = (props) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand">GitHub Fetcher</a>
    <Search onSearch={props.onSearch}/>
  </nav >
)

export default Navigation;