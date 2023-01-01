import { useState, useCallback, useEffect, useLayoutEffect, ReactEventHandler } from 'react';

type Props = {
}

export default function TestFNComponent(props: Props) {
  let [ val, setVal ] = useState<null | String>(null);
  
  let changeHandler: React.ChangeEventHandler = useCallback(function(e) {
    setVal(function() {
      return (e.target as HTMLInputElement).value;
    });
  },[ val ])

  useEffect(function() {
    console.log(`value: ${val}`);
  }, []);

  return (
    <form method="post">
      <input onChange={changeHandler} type="text" value="" placeholder="Test data" />
    </form>
  );
};