import React, { useState, useEffect } from "react";
import webAPI from "../apis/webAPI.js";
import crag from "../images/crag.png"
import Websingleitem from "./Websingleitem.js";
import './style.css';

export default function Progitems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProg = async () => {
      try {
        const response = await webAPI.get("/api/web");
        setItems(response.data);
      } catch (error) {}
    };
    fetchProg();
  }, []);

  const renderProg = () => {
    return (
      <div className="programming" id="programming1">
        {items.map(item => (
            <Websingleitem key={item._id} item={item} />
       
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="sections" id="works">
        <div className="programming">
        <img src={crag} alt="crag" class="progimg" />
          <h2 className="progtitle">Ծրագրավորում</h2>
            {renderProg()}</div>
      </div>
    </div>
  );
}
