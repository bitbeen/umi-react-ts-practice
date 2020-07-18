import React, { useState } from 'react';
import styles from './index.less';

const Home: React.FC = () => {
  const [name, setName] = useState('199');
  const handleClick = () => {
    console.log(new Date());

    setName(new Date().toString());
  };

  return (
    <div onClick={handleClick} className={styles.container}>
      home :{name}
    </div>
  );
};

export default Home;
