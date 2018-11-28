import React from 'react';
import ChildComponent from '../child-component';
import SectionPreviewList from '../section-preview-list';
import SectionSelectedMockUp from '../section-selected-mock-up';
import styles from './Section.module.scss';

const Section = ({ data, selected: index, onSelect }) => {
  const getChildren = (childrenArr) => {
    return childrenArr.map(child => {
      return (
        <ChildComponent
          data={child}
          key={child.id}
        >
          {child.children ? getChildren(child.children) : null}
        </ChildComponent>
      );
    })
  };

  return (
    <section className={styles.section}>
      {index !== null
        ? <SectionSelectedMockUp data={data[index]} styles={styles} children={getChildren(data[index].children)}/>
        : <SectionPreviewList data={data} onSelect={onSelect} styles={styles}/>
      }
    </section>
  );
};

export default Section;
