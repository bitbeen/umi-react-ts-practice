import React from 'react';
import styles from './index.less';
import { formatMessage } from 'umi-plugin-locale';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';


export default function () {

  
  return (
    <div className={styles.cointainer}>
      <Home>
      </Home>
    </div>
  );
}
