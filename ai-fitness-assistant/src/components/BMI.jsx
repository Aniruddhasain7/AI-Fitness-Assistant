import { useState } from "react";

const BMI = () => {
  const [h, setH] = useState("");
  const [w, setW] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculate = () => {
    const val = (w / ((h / 100) * (h / 100))).toFixed(2);
    setBmi(val);
  };

  return (
    <div className="bmi">
      <h3>BMI Calculator</h3>
      <input placeholder="Height cm" onChange={(e) => setH(e.target.value)} />
      <input placeholder="Weight kg" onChange={(e) => setW(e.target.value)} />
      <button onClick={calculate}>Calculate</button>
      {bmi && <p>Your BMI: {bmi}</p>}
    </div>
  );
};

export default BMI;