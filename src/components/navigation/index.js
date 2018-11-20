import React, { useState } from 'react';
import NavItem from '../nav-item';
import './navigation.scss';

const Navigation = ({ items }) => {
  const [activeNavItem, setActive] = useState(null);

  return (
    <nav>
      <ul>
        {items.map((item) => <NavItem key={item.id} id={item.id} title={item.title} active={activeNavItem} setActive={setActive}/>)}
      </ul>
    </nav>
  );
};

export default Navigation;
