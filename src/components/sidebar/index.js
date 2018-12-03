import React from 'react';
import Navigation from '../navigation';

const Sidebar = ({ selected, data }) => {
  return (<aside className="sidebar">{selected !== null ? <><h3>{data[selected].title}</h3><p>{data[selected].description}</p></> : <Navigation/>}</aside>);
};

export default Sidebar;
