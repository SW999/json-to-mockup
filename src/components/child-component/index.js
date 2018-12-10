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

  state = {
    innerStyle: this.props.data.style,
  };

  onEnter = () => {
    const { style, styleHover } = this.props.data;

    this.setState({
      innerStyle: { ...style, ...styleHover }
    });
  };

  onLeave = () => {
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
        onPointerEnter={this.onEnter}
        onPointerLeave={this.onLeave}
        title={text}
      >
        {text}
        {children}
      </div>
    )
  }
}
