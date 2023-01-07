import { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import style from './test.module.css';
import './test.css';

type Props = {
  [propName: string]: string | Function | object | number | null;
};

export default function TestFNComponent(props: Props & { requiredProp?: string; }) {
  let [ val, setVal ] = useState<null | String>(null);
  
  const changeHandler: React.FormEventHandler = useCallback(function(e) {
    setVal(() => ((e.target as HTMLElement).firstElementChild as HTMLInputElement).value);
    e.preventDefault(); // prevent page refresh and loss of state
  }, [ true ]);

  useEffect(function() {
    console.log(`value: ${val}`);
    const timeoutId = setTimeout(() => console.log(`timeout: ${val}`), 5000);
    return function () {
      clearTimeout(timeoutId);
    };
  });

  return (
    <form method="post" onSubmit={changeHandler}>
      <input className={`${style.mySpecialClass} aTestClass`} type="text" placeholder="Test data" value={'requiredProp' in props ? props.requiredProp : "No required prop supplied"} />
    </form>
  );
};