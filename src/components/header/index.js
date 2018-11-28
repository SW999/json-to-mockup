import React from 'react';

const Header = ({ selected }) => {
  const style = selected !== null ? { height: 0, padding: '0 1.6rem' } : null;

  return <header style={style}><h1>JSON to Mock-ups</h1></header>
};

export default Header;
