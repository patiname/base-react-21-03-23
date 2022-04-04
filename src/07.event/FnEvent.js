import { useState } from "react";

export const FnEvent = () => {
  const [num, setNum] = useState(0);

  //   const handlePlus = () => {
  //     setNum(num + 1);
  //   };

  //   const handleMinus = () => setNum(num - 1);

  return (
    <div>
      <h1>{num}</h1>
      {/* <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button> */}
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};
