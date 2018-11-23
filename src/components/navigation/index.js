import React, { Component } from 'react';
import NavItem from '../nav-item';
import { selectMockUp } from '../../actions/data-actions';
import { connect } from 'react-redux';
import './navigation.scss';

class Navigation extends Component {
  render() {
    const { data, selectedMockUpIndex, selectMockUpAction } = this.props;

    return (
      <nav>
        {data !== null ?
          <ul>
            <NavItem key='id0' id='id0' title="Show All" isActive={selectedMockUpIndex === null} onActive={() => selectMockUpAction(null)}/>
            {data.map((item, index) => <NavItem key={item.id} id={item.id} title={item.title} isActive={index === selectedMockUpIndex} onActive={() => selectMockUpAction(index)}/>)}
          </ul> : <span>Ups!</span>
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
    selectMockUpAction: index => dispatch(selectMockUp(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
