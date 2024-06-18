const options = [
  { label: "Dissatisfied (0%)", value: 0 },
  { label: "It was okay (5%)", value: 5 },
  { label: "Neutral (10%)", value: 10 },
  { label: "Satisfied (20%)", value: 20 },
];

export default function Percentage({ percentage, onSetPercentage, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(+e.target.value)}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
