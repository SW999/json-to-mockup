import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import Section from './components/section';
import Sidebar from './components/sidebar';
import ErrorStub from './components/error-stub';
import ApiService from './services/api-service';
import { setData } from './actions/data-actions';

class App extends Component {
  apiService = new ApiService();

  componentDidMount() {
    const { setDataAction } = this.props;
    const { getData } = this.apiService;

    getData().then(res => setDataAction(res));
  }

  render() {

    return (
      <>
        <Header/>
        <div className="container">
          <ErrorStub key='app'>
            <Section/>
            <Sidebar/>
          </ErrorStub>
        </div>
        <Footer/>
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    data: store.data
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setDataAction: data => dispatch(setData(data))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
