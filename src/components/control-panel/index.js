import React from 'react';
import style from './ControlPanel.module.scss';

const ControlPanel = () => {
  return (
    <div className={style.controlPanel}>
      <div className={style.controlElement}><img src="./assets/img/icon-view.svg" alt="View mode" title="View mode"/></div>
      <div className={style.controlElement}><img src="./assets/img/icon-grid.svg" alt="Toggle grid" title="Toggle grid"/></div>
      <div className={style.controlElement}><img src="./assets/img/icon-tune.svg" alt="Tune" title="Tune"/></div>
    </div>
  );
};

export default ControlPanel;
