import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { selectedMockUpIndex } = this.props;
    const style = selectedMockUpIndex !== null ? { height: 0, padding: '0 1.6rem' } : null;

    return <header style={style}><h1>JSON to Mock-ups</h1></header>
  }
}

const mapStateToProps = store => {
  return {
    selectedMockUpIndex: store.selectedMockUpIndex
  }
};

export default connect(mapStateToProps)(Header);
