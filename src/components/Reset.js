import React from "react";

export default function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
