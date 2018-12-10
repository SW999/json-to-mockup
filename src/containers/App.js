import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/index';
import Section from '../components/section/index';
import Sidebar from '../components/sidebar/index';
import ErrorStub from '../components/error-stub/index';
import ApiService from '../services/api-service';
import * as dataActions from '../actions/data-actions';

const Footer = lazy(() => import('../components/footer/index'));

class App extends Component {
  apiService = new ApiService();

  componentDidMount() {
    const { setData } = this.props;
    const { getData } = this.apiService;

    getData().then(res => setData(res));
  }

  dispatchControlAction = (actionName = '') => {
    const { selectMockUp, toggleGridView } = this.props;

    switch (actionName) {
      case 'back':
        selectMockUp(null);
        break;

      case 'grid':
        toggleGridView();
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
        <Suspense fallback=''>
          <Footer selected={selected} onControlAction={this.dispatchControlAction} isGridVisible={gridView}/>
        </Suspense>
      </>
    );
  }
}

export default connect(
  ({ data, selectedMockUpIndex, gridView }) => ({
    data,
    selectedMockUpIndex,
    gridView
  }),
  {
    ...dataActions
  }
)(App);
