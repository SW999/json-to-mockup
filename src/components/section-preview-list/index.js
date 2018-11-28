import React from 'react';
import Loader from '../loader';

const SectionPreviewList = ({ data, onSelect, styles }) => {
  if (data === null) {
    return <><h1>Loading...</h1><Loader /></>
  }

  return (
    <>
      <h1>Available Mock-ups</h1>
      <div className={styles.previewItems}>
        {data.map((mockup, index) => (
          <div key={mockup.id} className={styles.previewItemWrapper} onClick={() => onSelect(index)}>
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

export default SectionPreviewList;
