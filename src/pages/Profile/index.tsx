import React, { createContext, useContext } from 'react';

import styles from "./index.less";
import { HomeContext } from '@/pages/Home';
export interface ProfileProps {
    name?:string;
    age?:Number;
}

const Profile: React.FC<ProfileProps> = (props:ProfileProps) => {

    const {name,age}=useContext(HomeContext)
    return <div>
            <h1>age:{age}</h1>
            <h1>name:{name}</h1>
    </div>
}

export default Profile;