import React from 'react';

const NavItem = ({ id, title, isActive, onActive }) => {
  const onItemClick = (e) => {
    e.preventDefault();

    onActive(id);
  };
  const text = id !== 'id0' ? `Mock-up #${id}` : title;

  return (
    <li>
      <span
        title={title}
        className={isActive ? 'link-item current' : 'link-item'}
        onClick={onItemClick}
      >{text}</span>
    </li>
  );
};

export default NavItem;
