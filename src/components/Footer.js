import React from "react";
import "./footer.css";
import logo from "../images/logogit.png";

export default function Footer() {
  return (
    <div className="main_div">
      <div className="logo_div">
        <img src={logo} alt="logo" className="logo" />
        <p className="logo_description">
          «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի
          կողմից: Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ, որոնց
          նպատակն է մեծացնել Ձեր բիզնեսի շահութաբերությունը և նպաստել աճին: Մեր
          ստեղծարար թիմը համատեղ ուժերով տալիս Է նորարարական լուծումներ, որոնք
          նպաստում են Ձեր բիզնեսի թիրախային լսարանի ներգրավմանը:
        </p>
      </div>
      
    </div>
  );
}
