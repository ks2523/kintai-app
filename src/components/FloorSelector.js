function FloorSelector({ floor, setFloor }) {
  return (
    <div>
      <button onClick={() => setFloor("1階")}>1階</button>
      <button onClick={() => setFloor("2階")}>2階</button>
      <p>現在の階: {floor}</p>
    </div>
  );
}
export default FloorSelector;
