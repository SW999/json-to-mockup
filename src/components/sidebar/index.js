import React from 'react';
import Navigation from '../navigation';

const Sidebar = ({ selected, data }) => {
  const isSelected = selected !== null;

  return (
    <aside className={isSelected ? 'sidebar project-info' : 'sidebar'}>
      {isSelected ? <><h3>{data[selected].title}</h3><br/><p>{data[selected].description}</p></> : <Navigation/>}
    </aside>
  );
};

export default Sidebar;
