import { useState } from "react";

import Bills from "./Bills";
import Output from "./Output";
import Percentage from "./Percentage";
import Reset from "./Reset";

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <Bills bill={bill} onSetBill={setBill} />
      <Percentage percentage={percentage1} onSetPercentage={setPercentage1}>
        How did you like the service?
      </Percentage>
      <Percentage percentage={percentage2} onSetPercentage={setPercentage2}>
        How did your friend like the service?
      </Percentage>
      {bill > 0 && (
        <>
          <Output tip={tip} bill={bill} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default TipCalculator;
