import { useEffect, useState } from "react";
import "./Gallery.css";

export default function Gallery() {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/api/photos")
      .then(res => res.json())
      .then((data: { url: string }[]) =>
        setPhotos(data.map(p => p.url))
      );
  }, []); // 初回のみ取得

  return (
    <div className="grid">
      {photos.map(url => (
        <div className="card" key={url}>
          <img src={url} alt="" />
        </div>
      ))}
    </div>
  );
}
