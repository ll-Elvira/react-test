import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../store/modules/test';
// import styles from './Counter.module.css';
import { incrementAge, decrementAge, change } from '../store/modules/user';
export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
//调用这些 action creators（或者称之为 reducers）时，它们会返回一个描述特定操作的 action 对象。
// 这些生成的 action 对象会被传递给 Redux 中的 dispatch 函数，以便将它们发送到 Redux store。
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div style={{backgroundColor: 'red'}}>{name}</div>
      <input 
      type="text"
      value={name}
      onChange={(e)=>{dispatch(change(e.target.value))}}/>
    </div>
  );
}