import React, { useState, useEffect } from "react";
import mediaAPI from "../apis/mediaAPI.js";
import "./single.css";

export default function Mediasinglepage({ match }) {
  const [media, setMedia] = useState([]);

  const mediaId = match.params.id;

 

  useEffect(() => {
    const getMedia = async () => {
      const response = await mediaAPI.get(`/api/media/${mediaId}`);
      setMedia(response.data);
    };
    getMedia();
  }, [mediaId]);

  return (
    <div>
      <div className="single-head">
        <div className="title">
          <h4 className="entavernagir">Մուլտիմեդիա</h4>
          <h1 className="vernagir">{media.title}</h1>

          <button type="button" className="sign-button">
            Գրանցվել
          </button>
        </div>
        <div className="icon2">
          <img src={media.img} alt="icon" className="icon-image" />
        </div>
      </div>
      <div className="info">
        <ul>
          <li>
            <p className="info-text">
              | ....<b> Մակարդակ</b>՝ {media.makardak} .... |
            </p>
          </li>
          <li>
            <p className="info-text">
              .... <b>Տևողությունը</b>՝ {media.transition} .... |
            </p>
          </li>
          <li>
            <p className="info-text">
              .... <b>Դասավանդման լեզուն</b>՝ {media.language}.... |
            </p>
          </li>
          <li>
            <p className="info-text">
              .... <b>Դասընթացի ամսական վճարը</b>՝ {media.fee} .... |
            </p>
          </li>
        </ul>
      </div>

      <div className="workshop">
        <div className="gif-div">
          <img src={media.maingif} alt="gif" className="gif" />
        </div>
        <div className="workshop-div">
          <h4 className="workhop-subtitle">Դասընթացի նկարագրությունը</h4>
          <p className="workshop-text">{media.description}</p>
        </div>
      </div>

      <div className="workshop-timeline">
        <div className="workshop-steps">
          <h3 className="workshop-title">Դասընթացի Ընթացակարգը</h3>
          <p className="step" id="first-step">
            {media.step1}
          </p>
          <p className="step" id="second-step">
            {media.step2}
          </p>
          <p className="step" id="third-step">
            {media.step3}
          </p>
        </div>

        <div className="w_image">
          <h3>Բնութագիր՝</h3>
          <div className="w_aboutdiv divvvv" id="html">
            <p className="w_about">{media.desc1}</p>
            <img src={media.gif1} alt="" width="500px" />
          </div>
          <div className="w_aboutdiv divv" id="css">
            <p className="w_about">{media.desc2}</p>
            <img src={media.gif2} alt="" width="500px" />
          </div>
          <div className="w_aboutdiv" id="css3">
            <p className="w_about">{media.desc3}</p>
            <img src={media.gif3} alt="" width="500px" />
          </div>
        </div>
      </div>
    </div>
  );
}
