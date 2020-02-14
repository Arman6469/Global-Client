import React, { useState, useEffect } from "react";
import progAPI from "../apis/progAPI.js";
import logog from "../images/logog.png"
import Progsingleitem from "./Progsingleitem.js";

export default function Progitems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProg = async () => {
      try {
        const response = await progAPI.get("/api/prog");
        setItems(response.data);
      } catch (error) {}
    };
    fetchProg();
  }, []);

  const renderProg = () => {
    return (
      <div className="programming">
        {items.map(item => (
            <Progsingleitem key={item._id} item={item} />
       
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="sections" id="works">
        <div className="programming">
        <img src={logog} alt="logog" class="progimg" />
          <h2 className="progtitle">Վեբ ծրագրավորում</h2>
            {renderProg()}</div>
      </div>
    </div>
  );
}
