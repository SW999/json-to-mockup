import React from 'react';

const NavItem = ({ id, title, isActive, onActive }) => {
  const onItemClick = (e) => {
    e.preventDefault();

    onActive(id);
  };

  return (
    <li>
      <span
        title={title}
        className={isActive ? 'link-item current' : 'link-item'}
        onClick={onItemClick}
      >Mock-up #{id}</span>
    </li>
  );
};

export default NavItem;
