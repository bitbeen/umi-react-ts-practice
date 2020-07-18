import React from 'react';
import styles from './index.less';
import { formatMessage } from 'umi-plugin-locale';
import Home from '@/pages/Home';
export default function () {
  return (
    <div className={styles.normal}>
      <Home></Home>
    </div>
  );
}
