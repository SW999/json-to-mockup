import React from 'react';

const Footer = ({ selected }) => {
  const style = selected !== null ? { height: '5.4rem', padding: '1.6rem', fontSize: '1.6rem' } : null;

  return <footer style={style}>Footer</footer>
};

export default Footer;
