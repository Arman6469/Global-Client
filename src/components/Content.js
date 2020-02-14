import React from "react";
import himnakan_image from "../images/himnakan-01.png";
import icon1 from "../images/icon1-01.png";
import icon2 from "../images/icon2-01.png";
import icon3 from "../images/icon3-01.png";
import ill1 from "../images/code-course-illustration.png";
import ill2 from "../images/results-illustration.png";
import ill3 from "../images/consultation-illustration.png";
import ill4 from "../images/53382.png";
import Progitems from "./Progitems.js";
import Webitems from "./Webitems.js";
import Mediaitems from "./Mediaitems.js";

export default function Content() {
  return (
    <div>
      <div className="content">
        <div className="himnakan_div">
          <div className="edu_div">
            <div className="edu_child">
              <h1 className="title">
                Կրթություն <br />
                Պրակտիկա <br />
                Աշխատանք
              </h1>
              <a href="#works" className="myButton">
                Ընտրիր քո մասնագիտությունը
              </a>
            </div>
          </div>
          <div className="mainimage">
            <img
              src={himnakan_image}
              alt="himnakan"
              className="himnakan_image"
            />
          </div>
        </div>

        <div className="aravelutyun">
          <div className="abouticon">
            <img src={icon1} alt="icon" className="iconkeq" />
            <div className="aboutcard" id="card1">
              <h2 className="abouttitle">Նորարություն</h2>
              <p className="abouttext">
                Հաշվի առնելով ՏՏ ոլորտի ակնթարթային զարգացումը՝ ուսումնասիրում
                ենք նորագույն տեխնոլոգիաները և մեր ուսանողների հետ միասին
                նպաստում դրանց զարգացմանն ու գործնական հարթակում կիրառմանը։
              </p>
            </div>
          </div>
          <div className="abouticon">
            <img src={icon2} alt="icon" className="iconkeq" />
            <div className="aboutcard" id="card2">
              <h2 className="abouttitle">Փորձառու թիմ</h2>
              <p className="abouttext">
                Մեր փորձառու մասնագետների օգնությամբ կհաղթահարեք յուրաքանչյուր
                դժվարություն և հնարավորություն կունենաք ուղելու հարցեր ոչ միայն
                դասընթացի ընթացքում այլ նաև հետո։
              </p>
            </div>
          </div>
          <div className="abouticon">
            <img src={icon3} alt="icon" className="iconkeq" />
            <div className="aboutcard" id="card1">
              <h2 className="abouttitle">Ստեղծարարություն</h2>
              <p className="abouttext">
                Խնդիրները նոր հնարավորությունների վերածելու ճկունություն և
                ստեղծագործ մոտեցումների կիրառման էկոհամակարգ։
              </p>
            </div>
          </div>
        </div>

        <div className="about" id="abou">
          <div className="kompidem">
            <div className="abtx">
              <h1 className="about_title">Մեր մասին</h1>
              <p className="about_text">
                «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ.
                Քոսյանի կողմից: Մենք առաջարկում ենք ծրագրային տարատեսակ
                լուծումներ, որոնց նպատակն է մեծացնել Ձեր բիզնեսի
                շահութաբերությունը և նպաստել աճին: Մեր ստեղծարար թիմը համատեղ
                ուժերով տալիս Է նորարարական լուծումներ, որոնք նպաստում են Ձեր
                բիզնեսի թիրախային լսարանի ներգրավմանը: «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն
                հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի կողմից: Մենք
                առաջարկում ենք ծրագրային տարատեսակ լուծումներ, որոնց նպատակն է
                մեծացնել Ձեր բիզնեսի շահութաբերությունը և նպաստել աճին: Մեր
                ստեղծարար թիմը համատեղ ուժերով տալիս Է նորարարական լուծումներ,
                որոնք նպաստում են Ձեր բիզնեսի թիրախային լսարանի ներգրավմանը:
              </p>
            </div>
          </div>
        </div>

        <div className="sections" id="works">
          <Progitems />
          <Webitems />
          <Mediaitems />
        </div>
        <div className="usucum">
          <div className="education">
            <div className="image">
              <img
                src={ill1}
                alt="code-course-illustration"
                className="code_img"
              />
            </div>
            <h4 className="edu_title">Որակյալ Կրթություն</h4>
            <p className="edu_text">
              Ուսումնական մեթոդիկան հիմնված է պրակտիկ հանձնարարությունների հիման
              վրա, այդպիսով, գիտելիքներն ամրապնդվում են անմիջապես գործնականում:
            </p>
          </div>

          <div className="education" id="illu1">
            <div className="image">
              <img
                src={ill2}
                alt="code-course-illustration"
                className="code_img"
              />
            </div>
            <h4 className="edu_title">Բարձր մոտիվացիա</h4>
            <p className="edu_text">
              Անընդմեջ մարտահրավերներ և արդյունքների հասնելու ձգտումներ։ Երբ
              ամեն մի ձեռքբերում գնահատվում է և մոտիվացնում` էլ ավելիին
              հասնելու:
            </p>
          </div>

          <div className="education" id="illu2">
            <div className="image">
              <img
                src={ill3}
                alt="code-course-illustration"
                className="code_img"
              />
            </div>
            <h4 className="edu_title">Ծրագրավորողների ակումբ</h4>
            <p className="edu_text">
              Դասընթացների ավարտից հետո դուք կկարողնանաք մասնակցել կազմակերպվող
              սեմինարներին և միջոցառումներին....
            </p>
          </div>

          <div className="education" id="illu3">
            <div className="image">
              <img
                src={ill4}
                alt="code-course-illustration"
                className="code_img"
              />
            </div>
            <h4 className="edu_title">Ուսանողներին</h4>
            <p className="edu_text">
              Եթե մասնագետ, ապա փորձառու, եթե կուրսեր, ապա որակյալ, եթե
              արդյունք, ապա երաշխավորված! Նվաճեք նորանոր բարձունքներ: Դեպի
              գիտելիքահենք երկիր:
            </p>
          </div>
        </div>

        {/* Kap */}

        <div className="contact_div">
          <div className="contact_elac">
            <p className="subscribe">Բաժանորդագրվեք</p>
            <input
              type="text"
              placeholder="Ձեր Email հասցեն"
              className="contact_input"
            />
            <br></br>
            <input type="submit" value="Ուղարկել" className="contact_submit"/>
          </div>
        </div>
      </div>
    </div>
  );
}
