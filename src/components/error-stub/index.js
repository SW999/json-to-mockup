import React, {Component} from 'react';
import brokenHeart from './broken_heart.svg';
import './error-stub.scss';

export default class ErrorStub extends Component {
    state = {
      errorInfo: null
    };

  componentDidCatch(error, info) {
    this.setState({
      errorInfo: info.componentStack
    });
  }
  render() {
    if(this.state.errorInfo) {
      return (
        <div className="error-stub-wrapper">
          <h1>Oh, no!</h1>
          <img src={brokenHeart} alt="error icon" className="error-stub-icon"/>
          <div className="error-stub-info"><strong>Something went wrong</strong> {this.state.errorInfo}</div>
        </div>
      );
    }

    return this.props.children;
  }
}
