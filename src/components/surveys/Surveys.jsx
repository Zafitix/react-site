import  { React } from "react";
import "./surveys.css";

import star  from '../../assets/star.png';
import inbrain from '../../assets/surveys/inbrain.svg';
import cpx from '../../assets/surveys/cpxresearch.svg';
import bitlabs from '../../assets/surveys/bitlabs.svg';
import theorem from '../../assets/surveys/theoremreach.svg';
import ps from '../../assets/surveys/ps.svg';
import pollfish from '../../assets/surveys/pollfish.svg';


const Surveys = () => {

  return (

    <div className="main__surveys">
      <div className="main__surveys-content">
        <div className="title">
          <h2>Surveys</h2>
        </div>
        <div className="surveys__display">
          <div className="row">

            <div className="survey">
              <img src={inbrain} />
              <div className="infos">
                <h2>InBrain</h2>
                <div className="rating">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
              </div>
            </div>

            <div className="survey">
              <img src={cpx} />
              <div className="infos">
                <h2>Cpx-research</h2>
                <div className="rating">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
              </div>
            </div>

            <div className="survey">
              <img src={bitlabs} />
              <div className="infos">
                <h2>Bitlabs</h2>
                <div className="rating">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
              </div>
            </div>

            <div className="survey">
              <img src={theorem} />
              <div className="infos">
                <h2>Theoremreach</h2>
                <div className="rating">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
              </div>
            </div>

            <div className="survey">
              <img src={ps} />
              <div className="infos">
                <h2>Precise Sample</h2>
                <div className="rating">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
              </div>
            </div>

            <div className="survey">
              <img src={pollfish} />
              <div className="infos">
                <h2>Pollfish</h2>
                <div className="rating">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Surveys;
