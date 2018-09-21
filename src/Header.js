// @flow

import React from 'react';

type Props ={
  siteName: string
}

function Header(props: Props) {
  return (
    <div className="App">
      {props.siteName}
    </div>
  );
}

export default Header;
