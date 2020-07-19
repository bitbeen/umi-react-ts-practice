import React, { useReducer } from 'react';
import { Button, Row, Col } from "antd"
import styles from "./index.less";


export interface ICount {
    count: number;
    type: string;

}


const ReducerCount: React.FC = () => {


    let [count, disatch] = useReducer((state: number, action: ICount) => {
        switch (action.type) {
            case 'add':
                return state + action.count;
            case 'sub':
                return state - action.count;
            default: return state;
        }
    }, 0)


    const doAdd = (count: number) => {
        return (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            console.log(event.target)
            disatch({ count: count, type: 'add' });
            event.preventDefault();
            event.stopPropagation()
        }
    }


    const doSub = (count: number) => {
        return (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            console.log(event.target);
            disatch({ count: count, type: 'sub' });

            event.preventDefault();
            event.stopPropagation()
        }
    }
    return <div>
        <Row>
            <Col span={12}>
                <Button type="primary" onClick={doAdd(10)}>add</Button>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <Button type="primary" onClick={doSub(10)}>sub</Button>
            </Col>
        </Row>
       <div>
       count:{count}
       </div>
    </div>
}
export default ReducerCount;