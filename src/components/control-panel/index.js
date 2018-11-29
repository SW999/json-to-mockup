import React, { useState } from 'react';
import style from './ControlPanel.module.scss';

const ControlButton = ({ name, active, url, title, style, onToggle }) => {
  const className = `${style.controlElement} ${name === active ? style.active : null}`;

  return <div className={className} onClick={_ => onToggle(name)}><img src={url} alt={title} title={title}/></div>;
};

const ControlPanel = () => {
  const [active, changeActive] = useState('view');
  const toggleButton = (name) => {
    if (name === active && name === 'view') return;
    changeActive(name === active ? 'view' : name);
  };
  const controlButtonsArr = [
    { name: 'view', url: './assets/img/icon-view.svg', title: 'View mode' },
    { name: "grid", url: './assets/img/icon-grid.svg', title: 'Toggle grid' },
    { name: "code", url: './assets/img/icon-code.svg', title: 'Show styles' },
    { name: "tune", url: './assets/img/icon-tune.svg', title: 'Tune' }
  ];

  return (
    <div className={style.controlPanel}>
      {controlButtonsArr.map(i => <ControlButton key={i.name} style={style} name={i.name} active={active} url={i.url} title={i.title} onToggle={toggleButton}/>)}
    </div>
  );
};

export default ControlPanel;
