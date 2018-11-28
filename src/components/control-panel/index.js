import React, { useState } from 'react';
import style from './ControlPanel.module.scss';

const ControlButton = ({ name, active, url, title, style, onToggle }) => {
  const className = `${style.controlElement} ${name === active ? style.active : null}`;

  return <div className={className} onClick={_ => onToggle(name)}><img src={url} alt={title} title={title}/></div>;
};

const ControlPanel = () => {
  const [active, changeActive] = useState('view');

  return (
    <div className={style.controlPanel}>
      <ControlButton style={style} name="view" active={active} url="./assets/img/icon-view.svg" title="View mode" onToggle={changeActive}/>
      <ControlButton style={style} name="grid" active={active} url="./assets/img/icon-grid.svg" title="Toggle grid" onToggle={changeActive}/>
      <ControlButton style={style} name="code" active={active} url="./assets/img/icon-code.svg" title="Show styles" onToggle={changeActive}/>
      <ControlButton style={style} name="tune" active={active} url="./assets/img/icon-tune.svg" title="Tune" onToggle={changeActive}/>
    </div>
  );
};

export default ControlPanel;
