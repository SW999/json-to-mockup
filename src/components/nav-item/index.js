import React from 'react';

const NavItem = ({ id, title, active, setActive }) => {
  const onItemClick = (e) => {
    e.preventDefault();

    setActive(id);
  };

  return (
    <li>
      <span
        title={title}
        className={active === id ? 'link-item current' : 'link-item'}
        onClick={onItemClick}
      >Mock-up #{id}</span>
    </li>
  );
};

export default NavItem;
