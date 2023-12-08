import  { React } from "react";
import "./videos.css";

import star  from '../../assets/star.png';
import videos from '../../assets/videos/video.svg';
import hideout from '../../assets/videos/hideout.svg';
import loottv from '../../assets/videos/loottv.svg';


const Videos = () => {

  return (

    <div className="main__videos">
      <div className="main__videos-content">
        <div className="title">
          <h2>Videos</h2>
        </div>
        <div className="videos__display">
          <div className="row">

            <div className="video">
              <img src={videos} />
              <div className="infos">
                <h2>Unlimited Videos</h2>
                <div className="rating">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
              </div>
            </div>

            <div className="video">
              <img src={hideout} />
              <div className="infos">
                <h2>HideOut TV</h2>
                <div className="rating">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
              </div>
            </div>

            <div className="video">
              <img src={loottv} />
              <div className="infos">
                <h2>Loot.tv</h2>
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

export default Videos;
