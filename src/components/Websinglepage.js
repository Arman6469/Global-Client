import React, { useState, useEffect } from "react";
import webAPI from "../apis/webAPI.js";
import "./single.css";

export default function Websinglepage({ match }) {
  const [web, setWeb] = useState([]);

  const webId = match.params.id;

 

  useEffect(() => {
    const getWeb = async () => {
      const response = await webAPI.get(`/api/web/${webId}`);
      setWeb(response.data);
    };
    getWeb();
  }, [webId]);

  return (
    <div>
      <div className="single-head">
        <div className="title">
          <h4 className="entavernagir">Վեբ ծրագրավորում</h4>
          <h1 className="vernagir">{web.title}</h1>

          <button type="button" className="sign-button">
            Գրանցվել
          </button>
        </div>
        <div className="icon2">
          <img src={web.img} alt="icon" className="icon-image" />
        </div>
      </div>
      <div className="info">
        <ul>
          <li>
            <p className="info-text">
              | ....<b> Մակարդակ</b>՝ {web.makardak} .... |
            </p>
          </li>
          <li>
            <p className="info-text">
              .... <b>Տևողությունը</b>՝ {web.transition} .... |
            </p>
          </li>
          <li>
            <p className="info-text">
              .... <b>Դասավանդման լեզուն</b>՝ {web.language}.... |
            </p>
          </li>
          <li>
            <p className="info-text">
              .... <b>Դասընթացի ամսական վճարը</b>՝ {web.fee} .... |
            </p>
          </li>
        </ul>
      </div>

      <div className="workshop">
        <div className="gif-div">
          <img src={web.maingif} alt="gif" className="gif" />
        </div>
        <div className="workshop-div">
          <h4 className="workhop-subtitle">Դասընթացի նկարագրությունը</h4>
          <p className="workshop-text">{web.description}</p>
        </div>
      </div>

      <div className="workshop-timeline">
        <div className="workshop-steps">
          <h3 className="workshop-title">Դասընթացի Ընթացակարգը</h3>
          <p className="step" id="first-step">
            {web.step1}
          </p>
          <p className="step" id="second-step">
            {web.step2}
          </p>
          <p className="step" id="third-step">
            {web.step3}
          </p>
        </div>

        <div className="w_image">
          <h3>Բնութագիր՝</h3>
          <div className="w_aboutdiv divvvv" id="html">
            <p className="w_about">{web.desc1}</p>
            <img src={web.gif1} alt="" width="500px" />
          </div>
          <div className="w_aboutdiv divv" id="css">
            <p className="w_about">{web.desc2}</p>
            <img src={web.gif2} alt="" width="500px" />
          </div>
          <div className="w_aboutdiv" id="css3">
            <p className="w_about">{web.desc3}</p>
            <img src={web.gif3} alt="" width="500px" />
          </div>
        </div>
      </div>
    </div>
  );
}
