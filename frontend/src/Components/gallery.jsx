import { useEffect, useState } from "react";
import data from "../art.json";
import "./gallery.css";
import {useNavigate} from 'react-router-dom';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  const navigate = useNavigate();

  const navUser = (id) => {
    navigate('/gallery/' + id);
  }

  useEffect(() => {
    setGalleryItems(data);
  }, []);

  return (
    <div className="artContainer">
      {galleryItems.map((data, index) => (
        <div key={index} className="artItem" onClick={() => navUser(data.id)}>
          <h2>{data.name}</h2>
          <img src={data.image} className="thumbnail" alt="pic" />
        </div>
      ))}
    </div>
  );
};
export default Gallery;
