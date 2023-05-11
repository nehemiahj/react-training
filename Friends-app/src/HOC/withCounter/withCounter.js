import React, { useState } from "react";

export default function withCounter(RawComponent) {
  return () => {
    const [count, setCount] = useState(0);
    return (
      <>
        <RawComponent
          count={count}
          inCount={() => {
            setCount(count + 1);
          }}
        />
      </>
    );
  };
}

 
