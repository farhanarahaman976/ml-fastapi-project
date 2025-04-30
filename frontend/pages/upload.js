import { useState } from 'react';
import axios from 'axios';

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setStatus('Please choose a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/learn', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setStatus(response.data.message);
    } catch (error) {
      setStatus('Upload failed: ' + error.response?.data?.error || error.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Upload CSV File</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{status}</p>
    </div>
  );
}
