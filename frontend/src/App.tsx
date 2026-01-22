import { useState } from "react";
import Upload from "./Upload";
import Gallery from "./Gallery";
import "./App.css";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleUploadSuccess = () => {
    // アップロード成功 → Gallery再生成
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1 className="title">📸 Photo App</h1>

      <Upload onUploadSuccess={handleUploadSuccess} />

      <Gallery key={refreshKey} />
    </div>
  );
}

export default App;
