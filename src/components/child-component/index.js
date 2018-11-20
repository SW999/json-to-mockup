import React, { Component } from 'react';
import { shape, object, string } from 'prop-types';

export default class ChildComponent extends Component {
  static propTypes = {
    data: shape({
      style: object.isRequired,
      styleHover: object,
      text: string
    })
  };

  static defaultProps = {
    data: {
      style: {},
      styleHover: {},
      text: null
    }
  };

  state = {
    innerStyle: this.props.data.style,
  };

  handleMouserEnter = () => {
    const { style, styleHover } = this.props.data;

    this.setState({
      innerStyle: { ...style, ...styleHover }
    });
  };

  handleMouserLeave = () => {
    this.setState({
      innerStyle: this.props.data.style
    });
  };

  render() {
    const { data: { id, text }, children } = this.props;

    return (
      <div
        key={id}
        style={this.state.innerStyle}
        onMouseEnter={this.handleMouserEnter}
        onMouseLeave={this.handleMouserLeave}
        title={text}
      >
        {text}
        {children}
      </div>
    )
  }
}
