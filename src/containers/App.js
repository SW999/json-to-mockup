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
    const { setDataAction } = this.props;
    const { getData } = this.apiService;

    getData().then(res => setDataAction(res));
  }

  render() {
    const { data, selectedMockUpIndex: selected, selectMockUpAction, gridView, toggleGridAction } = this.props;

    return (
      <>
        <Header selected={selected}/>
        <div className="container">
          <ErrorStub key='app'>
            <Section data={data} selected={selected} onSelect={selectMockUpAction} isGridVisible={gridView}/>
            <Sidebar/>
          </ErrorStub>
        </div>
        <Footer selected={selected} onToggleGrid={toggleGridAction} isGridVisible={gridView}/>
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
    setDataAction: data => dispatch(setData(data)),
    selectMockUpAction: index => dispatch(selectMockUp(index)),
    toggleGridAction: _ => dispatch(toggleGridView())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
