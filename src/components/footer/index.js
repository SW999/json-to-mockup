import React from 'react';
import ControlPanel from '../control-panel';

const Footer = ({ selected, onToggleGrid, isGridVisible }) => {
  const style = selected !== null ? { height: '8rem', padding: '1.6rem', fontSize: '1.6rem' } : null;

  return <footer style={style}>{selected !== null ? <ControlPanel toggleGrid={onToggleGrid} isGridVisible={isGridVisible}/> : null}</footer>
};

export default Footer;
