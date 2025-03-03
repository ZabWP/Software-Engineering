import { useEffect, useState } from "react";
import data from "../art.json";
import "./gallery.css";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    setGalleryItems(data);
  }, []);

  return (
    <div className="artContainer">
      {galleryItems.map((data, index) => (
        <div key={index} className="artItem">
          <h2>{data.name}</h2>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
