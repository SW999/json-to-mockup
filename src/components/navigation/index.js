import React, { useState, Component } from 'react';
import NavItem from '../nav-item';
import { connect } from 'react-redux';
import './navigation.scss';

class Navigation extends Component {
  static defaultProps = {
    data: null
  };

  state = {
    activeItem: this.props.selectedMockUpIndex
  };

  setActive = (id) => {
    this.setState({ activeItem: id });
  };

  render() {

    return (
      <nav>
        {this.props.data !== null ?
          <ul>
            {this.props.data.map((item) => <NavItem key={item.id} id={item.id} title={item.title} onActive={this.setActive}/>)}
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

export default connect(mapStateToProps)(Navigation);
