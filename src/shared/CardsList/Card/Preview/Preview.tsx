import React from 'react';
import styles from './preview.css';

interface IPreviewProp {
  previewImg: string;
}
export function Preview({previewImg}: IPreviewProp) {
  return (
    <div className={styles.preview}>
      <img src={previewImg} className={styles.previewImg} alt="poster" />
    </div>
  );
}
