import React, { useState, useEffect } from "react";
import progAPI from "../apis/progAPI.js";
import "./single.css";

export default function Progsinglepage({ match }) {
  const [prog, setProg] = useState([]);

  const progId = match.params.id;

 

  useEffect(() => {
    const getProg = async () => {
      const response = await progAPI.get(`/api/prog/${progId}`);
      setProg(response.data);
    };
    getProg();
  }, [progId]);

  return (
    <div>
      <div className="single-head">
        <div className="title">
          <h4 className="entavernagir">Վեբ ծրագրավորում</h4>
          <h1 className="vernagir">{prog.title}</h1>

          <button type="button" className="sign-button">
            Գրանցվել
          </button>
        </div>
        <div className="icon2">
          <img src={prog.img} alt="icon" className="icon-image" />
        </div>
      </div>
      <div className="info">
        <ul>
          <li>
            <p className="info-text">
              | ....<b> Մակարդակ</b>՝ {prog.makardak} .... |
            </p>
          </li>
          <li>
            <p className="info-text">
              .... <b>Տևողությունը</b>՝ {prog.transition} .... |
            </p>
          </li>
          <li>
            <p className="info-text">
              .... <b>Դասավանդման լեզուն</b>՝ {prog.language}.... |
            </p>
          </li>
          <li>
            <p className="info-text">
              .... <b>Դասընթացի ամսական վճարը</b>՝ {prog.fee} .... |
            </p>
          </li>
        </ul>
      </div>

      <div className="workshop">
        <div className="gif-div">
          <img src={prog.maingif} alt="gif" className="gif" />
        </div>
        <div className="workshop-div">
          <h4 className="workhop-subtitle">Դասընթացի նկարագրությունը</h4>
          <p className="workshop-text">{prog.description}</p>
        </div>
      </div>

      <div className="workshop-timeline">
        <div className="workshop-steps">
          <h3 className="workshop-title">Դասընթացի Ընթացակարգը</h3>
          <p className="step" id="first-step">
            {prog.step1}
          </p>
          <p className="step" id="second-step">
            {prog.step2}
          </p>
          <p className="step" id="third-step">
            {prog.step3}
          </p>
        </div>

        <div className="w_image">
          <h3>Բնութագիր՝</h3>
          <div className="w_aboutdiv divvvv" id="html">
            <p className="w_about">{prog.desc1}</p>
            <img src={prog.gif1} alt="" width="500px" />
          </div>
          <div className="w_aboutdiv divv" id="css">
            <p className="w_about">{prog.desc2}</p>
            <img src={prog.gif2} alt="" width="500px" />
          </div>
          <div className="w_aboutdiv" id="css3">
            <p className="w_about">{prog.desc3}</p>
            <img src={prog.gif3} alt="" width="500px" />
          </div>
        </div>
      </div>
    </div>
  );
}
