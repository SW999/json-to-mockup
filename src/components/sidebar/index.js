import React from 'react';
import Navigation from '../navigation';

const Sidebar = ({ items }) => {
  return (
    <aside className="sidebar">
      <Navigation items={items}/>
    </aside>
  );
};

export default Sidebar;
