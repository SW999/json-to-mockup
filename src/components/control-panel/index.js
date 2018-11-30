import React, { Component } from 'react';
import style from './ControlPanel.module.scss';
import ControlButton from '../control-button';


export default class ControlPanel extends Component {
  state = {
    active: this.props.isGridVisible ? 'grid' : 'view'
  };

  componentDidUpdate(oldProps) {
    const { isGridVisible } = this.props;

    if (oldProps.isGridVisible !== isGridVisible) {
      this.setState({
        active: isGridVisible ? 'grid' : 'view'
      });
    }
  }

  toggleButton = name => {
    const { active } = this.state;
    if (name === 'view' && active === 'view') {
      return;
    } else if (name === 'grid' || active === 'grid') {
      this.props.toggleGrid();
    }

    this.setState(state => {
      return { active: name === state.active ? 'view' : name }
    });
  };

  getButtons() {
    const controlButtonsArr = [
      { name: 'view', url: './assets/img/icon-view.svg', title: 'View mode' },
      { name: 'grid', url: './assets/img/icon-grid.svg', title: 'Toggle grid' },
      { name: 'code', url: './assets/img/icon-code.svg', title: 'Show styles' },
      { name: 'tune', url: './assets/img/icon-tune.svg', title: 'Tune' }
    ];

    return controlButtonsArr.map(i => <ControlButton key={i.name} style={style} name={i.name} active={this.state.active} url={i.url} title={i.title} onToggle={this.toggleButton}/>);
  }

  render() {
    return (
      <div className={style.controlPanel}>
        {this.getButtons()}
      </div>
    );
  }
}
