import React from 'react';

const SectionSelectedMockUp = ({ data, styles, children, showGrid = false}) => {
  const { id, title, style } = data;

  return (
    <>
      <h1>{title}</h1>
      < div
        className={styles.wrapper}
        key={id}
        style={style}
      >
        {children}
      </div>
      {showGrid ? <div className={styles.grid12Columns}/> : null}
    </>
  );
};

export default SectionSelectedMockUp;
