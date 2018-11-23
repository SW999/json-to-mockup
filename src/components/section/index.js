import React, { Component } from 'react';
import ChildComponent from '../child-component';
import { selectMockUp } from '../../actions/data-actions';
import { connect } from 'react-redux';
import './section.scss';

class Section extends Component {
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

  showPreviewList = () => {
    const { data, selectMockUpAction } = this.props;

    if (data === null) {
      return <h1>There are not yet available Mock-ups</h1>
    }

    return (
      <>
        <h1>Available Mock-ups</h1>
        <div className="preview-items">
          {data.map((mockup, index) => (
            <div key={mockup.id} className="preview-item-wrapper" onClick={() => selectMockUpAction(index)}>
              <h3>{mockup.title}</h3>
              <img src={`./assets/img/${mockup.screen}`} alt={`${mockup.title} preview`}/>
            </div>
          ))}
        </div>
      </>
    );
  };

  render() {
    const { data, selectedMockUpIndex: index } = this.props;

    return (
      <section className="section">
        {index !== null ? this.showSelectedMockUp(data[index]) : this.showPreviewList()}
      </section>
    );
  }
}

const mapStateToProps = store => {
  return {
    data: store.data,
    selectedMockUpIndex: store.selectedMockUpIndex
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectMockUpAction: index => dispatch(selectMockUp(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
