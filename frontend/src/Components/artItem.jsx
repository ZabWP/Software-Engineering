import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import artData from '../art.json';
import { useNavigate } from 'react-router-dom';

const ArtItem = () => {
    const { id } = useParams();
    const [artItem, setArtItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const item = artData.find(art => art.id === parseInt(id));
        setArtItem(item);
    }, [id]);

    if (!artItem) {
        return <div>Loading...</div>;
    }

    

    return (
        <div>
            <img src={artItem.image} alt={artItem.name} />
            <h2>{artItem.name}</h2>
            <p>Author: {artItem.creator}</p>
            <p>Date Posted: {artItem.createdAt}</p>
            <button onClick={() => navigate('/home')}>Back to Home</button>

        </div>
    );
};

export default ArtItem;