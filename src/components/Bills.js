function Bills({ bill, onSetBill }) {
  function handleSetBill(e) {
    const value = e.target.value;
    if (value === "" || !isNaN(value)) {
      onSetBill(+value);
    }
  }
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        value={bill}
        onChange={handleSetBill}
        type="text"
        placeholder="Bill value"
      />
    </div>
  );
}

export default Bills;
