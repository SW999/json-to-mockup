import React from 'react';

const SectionSelectedMockUp = ({ data, styles, children, showGrid}) => {
  const { id, style } = data;

  return (
    <>
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
