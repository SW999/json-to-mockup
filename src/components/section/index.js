import React from 'react';
import ChildComponent from '../child-component';
import './section.scss';

const Section = ({ data }) => {
  const { id, title, style, children } = data;
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
    <section className="section">
      <h1>{title}</h1>
      <div
        className="wrapper"
        key={id}
        style={style}
      >
        {getChildren(children)}
      </div>
    </section>
  );
};

export default Section;
