import { useState } from "react";

export default function AskPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const handleAsk = async () => {
    try {
      const res = await fetch(`http://localhost:8000/ask?q=${query}`);
      const data = await res.json();
      setResult(data.prediction || data.error);
    } catch (err) {
      setResult("Something went wrong!");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Ask a Question (Input comma-separated numbers)</h2>
      <input
        type="text"
        placeholder="e.g., 5.1,3.5,1.4,0.2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: 300, padding: 5 }}
      />
      <button onClick={handleAsk} style={{ marginLeft: 10, padding: "5px 10px" }}>
        Get Prediction
      </button>
      {result && <p style={{ marginTop: 20 }}>Prediction: {result}</p>}
    </div>
  );
}
