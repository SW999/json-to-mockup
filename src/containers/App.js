import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/index';
import Footer from '../components/footer/index';
import Section from '../components/section/index';
import Sidebar from '../components/sidebar/index';
import ErrorStub from '../components/error-stub/index';
import ApiService from '../services/api-service';
import { setData, selectMockUp, toggleGridView } from '../actions/data-actions';

class App extends Component {
  apiService = new ApiService();

  componentDidMount() {
    const { setData } = this.props;
    const { getData } = this.apiService;

    getData().then(res => setData(res));
  }

  dispatchControlAction = (actionName = '') => {
    const { selectMockUp, toggleGrid } = this.props;

    switch (actionName) {
      case 'back':
        selectMockUp(null);
        break;

      case 'grid':
        toggleGrid();
        break;

      default:
        console.log(`Not yet function for "${actionName}" button`);
    }

  };

  render() {
    const { data, selectedMockUpIndex: selected, selectMockUp, gridView } = this.props;

    return (
      <>
        <Header selected={selected}/>
        <div className="container">
          <ErrorStub key='app'>
            <Section data={data} selected={selected} onSelect={selectMockUp} isGridVisible={gridView}/>
            <Sidebar selected={selected} data={data}/>
          </ErrorStub>
        </div>
        <Footer selected={selected} onControlAction={this.dispatchControlAction} isGridVisible={gridView}/>
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    data: store.data,
    selectedMockUpIndex: store.selectedMockUpIndex,
    gridView: store.gridView
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setData: data => dispatch(setData(data)),
    selectMockUp: index => dispatch(selectMockUp(index)),
    toggleGrid: _ => dispatch(toggleGridView())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
