import React from 'react';

const ControlButton = ({ name, active, url, title, style, onAction }) => {
  const className = `${style.controlElement} ${name === active ? style.active : null}`;

  return <div className={className} onClick={_ => onAction(name)}><img src={url} alt={title} title={title}/></div>;
};

export default ControlButton;
