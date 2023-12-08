import  { React, useState, useEffect } from "react";
import "./profile.css";
import profile from '../../assets/profile.png'
import axios from "axios";
import { RiCoinsLine } from 'react-icons/ri';
import { Footer, Navbar } from '../../components';

import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)





const Earnings = () => {

  const data = {
    labels: ['Jul 14', 'Jul 17', 'Jul 20', 'Jul 23', 'Jul 26', 'Jul 29', 'Aug 02'],
    datasets: [{
      labels: 'Sales of the Week',
      data: [3, 6, 3, 12, 15, 1, 31],
      backgroundColor: '#b23216',
      borderColor: '#ff4820',
      pointBorderColor: '#b23216',
      fill: true,
      tension: 0.4
    }]
  }

  const options = {
    plugins: {
      legend: true
    },
  }

  return (
    <Line
      className="graph"
      data={data}
      options={options}>
    </Line>
  );
};

const Withdraws = () => {
  return (
    <div className="display__withdraw">
      <div className="display__withdraw-header">
        
      </div>
    </div>
  );
};

const Completed = () => {
  return (
    <div className="purple"></div>
  );
};

const InProgress = () => {
  return (
    <div className="orange"></div>
  );
};

const Chargebacks = () => {
  return (
    <div className="grey"></div>
  );
};


const Profile = () => {

  const [content, setContent] = useState("earnings");
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://188.213.25.184:8081/api/userInfo")
      .then((res) => {
        if (res.data.id) {
          // Vérification si les données de l'utilisateur sont présentes
          setAuth(true);
          setUserInfo(res.data); // Stockage des informations utilisateur
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChoose = (category) => {
    setContent(category);
  };

  return (

    <div>
      <Navbar />
        {
          auth ?
          <div className="main__profile section__padding">
            <div className="main__profile-head">
              <img src={profile} />
              <h1>{userInfo ? userInfo.name : "Loading..."}</h1>
              <div className="level">
                <h2>Level <span>{userInfo ? userInfo.level : "Loading..."}</span></h2>
              </div>
              <div className="level-bar">
                <h2>Level <span>{userInfo ? userInfo.level : "Loading..."}</span></h2>
                <div className="bar">
                  <p><span>{userInfo ? userInfo.xp : "Loading..."}</span>/500 XP Remaining</p>
                </div>
                <h2>Level <span>{userInfo ? userInfo.level+1 : "Loading..."}</span></h2>
              </div>
              <h2 className="why">Why level up? <a href="#">Take a look at our grid detailing level benefits</a></h2>
            </div>

            <div className="main__profile-stats">
              <div className="container">
                <span className="stats-img"><RiCoinsLine /></span>
                <div className="infos">
                  <h1>{userInfo ? userInfo.lifetime_earnings : "Loading..."}</h1>
                  <h2>Lifetime Earnings</h2>
                </div>
              </div>
              <div className="container">
                <span className="stats-img"><RiCoinsLine /></span>
                <div className="infos">
                  <h1>{userInfo ? userInfo.lifetime_withdrawn : "Loading..."}</h1>
                  <h2>Lifetime Withdrawn</h2>
                </div>
              </div>
              <div className="container">
                <span className="stats-img"><RiCoinsLine /></span>
                <div className="infos">
                  <h1>{userInfo ? userInfo.completed_offers : "Loading..."}</h1>
                  <h2>Completed Offers</h2>
                </div>
              </div>
              <div className="container">
                <span className="stats-img"><RiCoinsLine /></span>
                <div className="infos">
                  <h1>{userInfo ? userInfo.users_refered : "Loading..."}</h1>
                  <h2>Users Refered</h2>
                </div>
              </div>
            </div>

            <div className="main__profile-stats__details">
              <div className="choose">
                <a onClick={() => handleChoose("earnings")}>Earnings</a>
                <a onClick={() => handleChoose("withdraws")}>Withdraws</a>
                <a onClick={() => handleChoose("completed")}>Completed</a>
                <a onClick={() => handleChoose("in-progress")}>In Progress</a>
                <a onClick={() => handleChoose("chargebacks")}>Chargebacks</a>
              </div>

              <div className="display">

                {content === "earnings" && <Earnings />}
                {content === "withdraws" && <Withdraws />}
                {content === "completed" && <Completed />}
                {content === "in-progress" && <InProgress />}
                {content === "chargebacks" && <Chargebacks />}

              </div>
            </div>
          </div>

          :

          <div className='noauth'>
            <h3>{message}</h3>
            <h3>Login Now</h3>
            <button>Login</button>
          </div>
          
        }
      <Footer />
    </div>



  );
};

export default Profile;
