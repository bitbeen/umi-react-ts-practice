import React, { useContext } from "react";
import styles from "./index.less"
import { HomeContext } from '@/pages/Home';


const Conent: React.FC = () => {
    const {name,age}=useContext(HomeContext) 
    return <div>
        <hr></hr>
        <h1>name:{name}</h1>
        <h1>age:{age}</h1>
    </div>
}



export default Conent