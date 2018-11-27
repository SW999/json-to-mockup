import React, { Component } from 'react';
import ChildComponent from '../child-component';
import Loader from '../loader';
import { selectMockUp } from '../../actions/data-actions';
import { connect } from 'react-redux';
import styles from './Section.module.scss';

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
          className={styles.wrapper}
          key={id}
          style={style}
        >
          {this.getChildren(children)}
        </div>
        <div className={styles.grid12Columns}/>
      </>
    );
  };

  showPreviewList = () => {
    const { data, selectMockUpAction } = this.props;

    if (data === null) {
      return <><h1>Loading...</h1><Loader /></>
    }

    return (
      <>
        <h1>Available Mock-ups</h1>
        <div className={styles.previewItems}>
          {data.map((mockup, index) => (
            <div key={mockup.id} className={styles.previewItemWrapper} onClick={() => selectMockUpAction(index)}>
              <div className={styles.caption}
                 data-title={mockup.title}
                 data-description={mockup.description}>
                <img src={`./assets/img/${mockup.screen}`} alt={`${mockup.title} preview`}/>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  render() {
    const { data, selectedMockUpIndex: index } = this.props;

    return (
      <section className={styles.section}>
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
