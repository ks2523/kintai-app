import { useState } from "react";
import Keypad from "./components/Keypad";
import Clock from "./components/Clock";
import FloorSelector from "./components/FloorSelector";
import "./styles.css";

function App() {
  const [floor, setFloor] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleCodeSubmit = async () => {
    const res = await fetch("https://script.google.com/macros/s/AKfycbxtuEifzQeWa0eTcZiBazT1E_cMYfbXrXhAeEC2Bhj4vHI6xQbJ9S4HAdeyw4DIf6af/exec?mode=auth&code=" + code);
    const data = await res.json();
    if (data.status === "success") {
      setName(data.name);
      setMessage("");
    } else {
      setName("");
      setMessage("パスコードが間違っています");
    }
  };

  const handlePunch = async (type) => {
    const res = await fetch("https://script.google.com/macros/s/AKfycbxtuEifzQeWa0eTcZiBazT1E_cMYfbXrXhAeEC2Bhj4vHI6xQbJ9S4HAdeyw4DIf6af/exec", {
      method: "POST",
      body: JSON.stringify({ mode: "punch", code, type }),
    });
    const result = await res.json();
    setMessage(result.message);
  };

  return (
    <div className="container">
      <h1>勤怠管理</h1>
      <FloorSelector floor={floor} setFloor={setFloor} />
      <Clock />
      {!name ? (
        <Keypad code={code} setCode={setCode} onSubmit={handleCodeSubmit} />
      ) : (
        <div>
          <h2>{name} さん</h2>
          <button onClick={() => handlePunch("出勤")}>出勤</button>
          <button onClick={() => handlePunch("退勤")}>退勤</button>
        </div>
      )}
      <p>{message}</p>
    </div>
  );
}

export default App;
