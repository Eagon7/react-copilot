import { useRef, useState } from "react";

const useRefDemo = () => {
  const a = useRef(1);
  const [state, setState] = useState(1);

  const addRef = () => {
    a.current = a.current + 1;
  };

  return (
    <div>
      {state}
      <button onClick={() => setState((a.current = a.current + 1))}>a+</button>
      <button onClick={() => setState(state + 1)}>++</button>
    </div>
  );
};

export default useRefDemo;
