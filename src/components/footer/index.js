import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    const { selectedMockUpIndex } = this.props;
    const style = selectedMockUpIndex !== null ? { height: '5.4rem', padding: '1.6rem', fontSize: '1.6rem' } : null;

    return <footer style={style}>Footer</footer>
  }
}

const mapStateToProps = store => {
  return {
    selectedMockUpIndex: store.selectedMockUpIndex
  }
};

export default connect(mapStateToProps)(Footer);
