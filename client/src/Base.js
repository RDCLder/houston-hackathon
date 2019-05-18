import React from 'react';
import NavBar from './components/partials/NavBar'

function Base(props) {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
}

export default Base;
