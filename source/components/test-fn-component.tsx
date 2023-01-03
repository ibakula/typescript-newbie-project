import { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import style from './test.module.css';
import './test.css';

type Props = {
}

export default function TestFNComponent(props: Props) {
  let [ val, setVal ] = useState<null | String>(null);
  
  let changeHandler: React.FormEventHandler = useCallback(function(e) {
    e.preventDefault();
    setVal(() => ((e.target as HTMLElement).firstElementChild as HTMLInputElement).value);
  },[ val ])

  useEffect(function() {
    console.log(`value: ${val}`);
  });

  return (
    <form method="post" onSubmit={changeHandler}>
      <input className={`${style.mySpecialClass} aTestClass`} type="text" placeholder="Test data" />
    </form>
  );
};