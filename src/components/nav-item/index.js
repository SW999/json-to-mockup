import React from 'react';
import style from './NavItem.module.scss';

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
        className={isActive ? `${style.linkItem} ${style.current}` : `${style.linkItem}`}
        onClick={onItemClick}
      >{text}</span>
    </li>
  );
};

export default NavItem;
