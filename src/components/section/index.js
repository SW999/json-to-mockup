import React, { Component } from 'react';
import ChildComponent from '../child-component';
import { connect } from 'react-redux';
import './section.scss';

class Section extends Component {
  state = {
    selectedMockUpIndex: this.props.selectedMockUpIndex
  };

  getChildren = (childrenArr) => {
    return childrenArr.map(child => {
      return (
        <ChildComponent
          data={child}
          key={child.id}
        >
          {child.children ? this.getChildren(child.children) : null}
        </ChildComponent>
      );
    })
  };

  showSelectedMockUp = ({ id, title, style, children }) => {
    return (
      <>
        <h1>{title}</h1>
        < div
          className="wrapper"
          key={id}
          style={style}
        >
          {this.getChildren(children)}
        </div>
      </>
    );
  };

  onSelectMockup = (index) => {
    this.setState({
      selectedMockUpIndex: index
    });
  };

  showPreviewList = () => {
    if (this.props.data === null) {
      return <h1>There are not yet available Mock-ups</h1>
    }

    return (
      <>
        <h1>Available Mock-ups</h1>
        <div className="preview-items">
          {this.props.data.map((mockup, index) => (
            <div key={mockup.id} className="preview-item-wrapper" onClick={() => this.onSelectMockup(index)}>
              <h3>{mockup.title}</h3>
              <img src={`./assets/img/${mockup.screen}`} alt={`${mockup.title} preview`}/>
            </div>
          ))}
        </div>
      </>
    );
  };

  render() {
    const index = this.state.selectedMockUpIndex;

    return (
      <section className="section">
        {index !== null ? this.showSelectedMockUp(this.props.data[index]) : this.showPreviewList()}
      </section>
    );
  }
}

const mapStateToProps = store => {
  return {
    selectedMockUpIndex: store.selectedMockUpIndex,
    data: store.data
  }
};

export default connect(mapStateToProps)(Section);
