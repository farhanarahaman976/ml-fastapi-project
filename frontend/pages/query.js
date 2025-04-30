import { useState } from 'react';
import axios from 'axios';

export default function QueryPage() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');

  const handleQuery = async () => {
    try {
      const response = await axios.get('http://localhost:8000/ask', {
        params: { q: question }
      });
      setResult(response.data.prediction);
    } catch (error) {
      console.error(error);
      setResult('Prediction failed or model not trained yet.');
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Ask a Question</h1>
      <input
        type="text"
        placeholder="Enter values separated by commas"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleQuery}>Ask</button>
      {result && <p>Prediction: {result}</p>}
    </div>
  );
}

