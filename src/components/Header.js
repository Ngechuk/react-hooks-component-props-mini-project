import React from 'react';

function Header(props) {
  return (
    <header>
      <H1>{props.blogName}</H1>
    </header>
  );
}

export default Header;
