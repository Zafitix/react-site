import  { React, useEffect, useRef, useCallback } from "react";
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "./offers.css";


import audible from '../../assets/offers/audible.png';
import bank from '../../assets/offers/bank.webp';
import bear from '../../assets/offers/bear.gif';
import caesars from '../../assets/offers/caesars.png';
import fdj from '../../assets/offers/fdj.png';
import king from '../../assets/offers/king.jpg';
import lapin from '../../assets/offers/lapin.png';
import leclerc from '../../assets/offers/leclerc.png';
import mcdo from '../../assets/offers/mcdo.jpg';
import ono from '../../assets/offers/ono.png';
import pizza from '../../assets/offers/pizza.webp';
import stargate from '../../assets/offers/stargate.jpg';
import tiktok from '../../assets/offers/tiktok.webp';
import ubereats from '../../assets/offers/ubereats.jpg';
import viking from '../../assets/offers/viking.gif';
import warner from '../../assets/offers/warner.jpeg';

const Offers = () => {
  

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    

    <div className="main__offers">
      <div className="main__offers-content">
        <div className="carousel__control">
          <div className="title">
            <h2>Featured Offers</h2>
          </div>
          <div className="arrows">
            <RiArrowLeftCircleFill onClick={handlePrev} className="arrow" size={35}/>
            <RiArrowRightCircleFill onClick={handleNext} className="arrow" size={35}/>
          </div>
        </div>
        <div className="carousel">
          <Swiper
            ref={sliderRef}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={false}
            spaceBetween={10}
            slidesPerView="auto"
          >
            <SwiperSlide>
              <img src={audible} className="offer__img" draggable="false" />
              <h1 className="offer__title">FR - Audible 30 days free trial</h1>
                <p className="offer__desc">Audible Description - Try Flow Audible free for 30 days - choose from over 200,000 titles. Try it free for 30 days Sign up for Audible. Log in and choose an audiobook Listen at least ten minutes and get one month free Credit card required, only for new customers</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$1.45</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">OTHER</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={bank} className="offer__img" draggable="false" />
              <h1 className="offer__title">Idle Bank</h1>
                <p className="offer__desc">Run your own Idle Bank games, Print money games, serve clients, give out loans and get Rich in the newest Idle Business Tycoon Games.</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$25.57</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">GAME</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={bear} className="offer__img" draggable="false" />
              <h1 className="offer__title">Animal Kingdom - Level 68 - 13 days</h1>
                <p className="offer__desc">Conquer different islands, steal coins from other players and prove that you are the real coin master. Do you have what it takes to be the next King of the Animal Kingdom Isles?</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$33.00</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">OTHER</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={caesars} className="offer__img" draggable="false" />
              <h1 className="offer__title">Caesars Slots: Casino Games</h1>
                <p className="offer__desc">Play Caesars Slots and complete all tasks within 12 days. New users only.</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$96.42</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">GAME</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={fdj} className="offer__img" draggable="false" />
              <h1 className="offer__title">FDJ® - Loto, Euromillions</h1>
                <p className="offer__desc">Open the app, create and validate your account. New users only.</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$2.68</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">OTHER</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={king} className="offer__img" draggable="false" />
              <h1 className="offer__title">Board Kings Level 42 - 10 days</h1>
                <p className="offer__desc">Board Kings is the ultimate in online fun board games: play with your friends and destroy their game boards, while you grab the goods!</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$26.40</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">GAME</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={lapin} className="offer__img" draggable="false" />
              <h1 className="offer__title">Smash Party - Hero Action Game</h1>
                <p className="offer__desc">Play Smash Party and complete tasks to get the reward. New users</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$57.33</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">GAME</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={leclerc} className="offer__img" draggable="false" />
              <h1 className="offer__title">Leclerc App</h1>
                <p className="offer__desc">Join the Leclerc App</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$1.18</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">APP</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={mcdo} className="offer__img" draggable="false" />
              <h1 className="offer__title">McDonald's Registration</h1>
                <p className="offer__desc">No more rushing to the kitchen thanks to the McDo+ application and the McDelivery service.</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$0.61</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">APP</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={ono} className="offer__img" draggable="false" />
              <h1 className="offer__title">ONO Read Webtoon Online</h1>
                <p className="offer__desc">Download the app, open and read a comic. New users one</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$0.41</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">OTHER</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={pizza} className="offer__img" draggable="false" />
              <h1 className="offer__title">The Eat Repeat</h1>
                <p className="offer__desc">It’s food-collecting time and there are so many tasty dishes you can collect! Upgrade your skills so you can go further and collect more food dishes as you explore the depths of this world.</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$45.04</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">GAME</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={stargate} className="offer__img" draggable="false" />
              <h1 className="offer__title">Prime + MGM</h1>
                <p className="offer__desc">Sign up for a 30-day free trial of MGM. New users only.</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$2.38</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">FREE TRIAL</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={tiktok} className="offer__img" draggable="false" />
              <h1 className="offer__title">TikTok</h1>
                <p className="offer__desc">TikTok is a global short video community. With this application, you will be able to discover, create and edit amazing videos and share them easily with your friends and the whole world.</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$0.97</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">APP</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={ubereats} className="offer__img" draggable="false" />
              <h1 className="offer__title">Uber Eats</h1>
                <p className="offer__desc">Uber Eats is an online food ordering platform that allows you to order food for delivery from many of your favorite local restaurants. Simply place your order using the Uber Eats app!</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$10.31</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">PURCHASE</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={viking} className="offer__img" draggable="false" />
              <h1 className="offer__title">Lucky Buddies - Level 150 - 10 days</h1>
                <p className="offer__desc">Join your Facebook friends and millions of players around the world in attacks, towers and raids to grow your Lucky Buddies team to the top!</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$28.88</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">OTHER</span>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={warner} className="offer__img" draggable="false" />
              <h1 className="offer__title">Amazon - Prime Video Warner</h1>
                <p className="offer__desc">Amazon Prime Video 30-day free trial and Warner Pass - Register, confirm and start your trial</p>
                <div className="offer__bottom">
                  <div className="offer__bottom-left">
                    <span className="offer__bottom-left__price">$1.75</span>
                  </div>
                  <div className="offer__bottom-right">
                    <span className="offer__bottom-right__type">SIGNUP</span>
                  </div>
                </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div>

  );
};

export default Offers;
