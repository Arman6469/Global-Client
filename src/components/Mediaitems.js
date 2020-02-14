import React, { useState, useEffect } from "react";
import mediaAPI from "../apis/mediaAPI.js";
import media from "../images/media.png"
import Mediasingleitem from "./Mediasingleitem.js";
import './style.css';

export default function Mediaitems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await mediaAPI.get("/api/media");
        setItems(response.data);
      } catch (error) {}
    };
    fetchMedia();
  }, []);

  const renderProg = () => {
    return (
      <div className="programming" >
        {items.map(item => (
            <Mediasingleitem key={item._id} item={item} />
       
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="sections" id="works">
        <div className="programming" id="media">
        <img src={media} alt="media" class="progimg" />
          <h2 className="progtitle">Մուլտիմեդիա</h2>
            {renderProg()}</div>
      </div>
    </div>
  );
}
