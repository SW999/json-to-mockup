import React from 'react';

const SectionSelectedMockUp = ({ data, styles, children}) => {
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
      <div className={styles.grid12Columns}/>
    </>
  );
};

export default SectionSelectedMockUp;
