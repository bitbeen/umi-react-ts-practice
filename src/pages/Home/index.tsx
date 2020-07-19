import React, { useState, useEffect, useContext, createContext } from 'react';
import styles from './index.less';
import Profile from '@/pages/Profile';
import Conent from '@/pages/Content';
import ReducerCount from '@/pages/ReducerCount';
export const HomeContext = createContext({ name: "hello", age: 10 })
const Home: React.FC = (props) => {
  const [name, setName] = useState('199');//数组解构用于变量声明
  const [age, setAge] = useState(10);

  useEffect(() => {
    console.log(`副作用执行:age:${age}`)
  }, [age])
  const handleClick = () => {
    console.log(new Date());

    setName("小明".concat(new Date().getMilliseconds().toString()));
    setAge(new Date().getMilliseconds())
  };

  return (
    <div onClick={handleClick} className={styles.container}>
      <div>
        home :{name} age:{age}
      </div>
      <div>
        <HomeContext.Provider value={{ name, age }}>
          <Profile></Profile>
          <Conent></Conent>
        </HomeContext.Provider>
        <ReducerCount></ReducerCount>
      </div>
    </div>
  );
};

export default Home;
