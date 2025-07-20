function Keypad({ code, setCode, onSubmit }) {
  const handleClick = (num) => setCode(code + num);
  const handleBack = () => setCode(code.slice(0, -1));
  return (
    <div>
      <div>パスコード: {code}</div>
      <div className="keypad">
        {[1,2,3,4,5,6,7,8,9,0].map(n => (
          <button key={n} onClick={() => handleClick(n)}>{n}</button>
        ))}
        <button onClick={handleBack}>←</button>
        <button onClick={onSubmit}>確定</button>
      </div>
    </div>
  );
}
export default Keypad;
