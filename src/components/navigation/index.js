import React, { Component } from 'react';
import NavItem from '../nav-item';
import Loader from '../loader';
import { selectMockUp } from '../../actions/data-actions';
import { connect } from 'react-redux';
import style from './Navigation.module.scss';

class Navigation extends Component {
  render() {
    const { data, selectedMockUpIndex, selectMockUp } = this.props;

    return (
      <nav className={style.nav}>
        {data !== null ?
          <ul>
            <NavItem key='id0' id='id0' title="Show All" isActive={selectedMockUpIndex === null} onActive={() => selectMockUp(null)}/>
            {data.map((item, index) => <NavItem key={item.id} id={item.id} title={item.title} isActive={index === selectedMockUpIndex} onActive={() => selectMockUp(index)}/>)}
          </ul> : <Loader/>
        }
      </nav>
    );
  }
}

const mapStateToProps = store => {
  return {
    selectedMockUpIndex: store.selectedMockUpIndex,
    data: store.data
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectMockUp: index => dispatch(selectMockUp(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
