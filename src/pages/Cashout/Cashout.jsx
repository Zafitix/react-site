import  { React, useState, useEffect } from "react";
import "./cashout.css";
import axios from "axios";
import { Footer, Navbar } from '../../components';


import paypal  from '../../assets/cashout/paypal.svg';
import btc  from '../../assets/cashout/btc.svg';
import stake  from '../../assets/cashout/stake.png';
import eth  from '../../assets/cashout/eth.svg';
import ltc  from '../../assets/cashout/ltc.svg';
import doge  from '../../assets/cashout/doge.svg';
import faucetpay  from '../../assets/cashout/faucetpay.png';
import amazon  from '../../assets/cashout/amazon.svg';
import visa  from '../../assets/cashout/visa.svg';
import googleplay  from '../../assets/cashout/googleplay.svg';
import netflix  from '../../assets/cashout/netflix.svg';
import spotify  from '../../assets/cashout/spotify.png';
import zalando  from '../../assets/cashout/zalando.svg';
import steam  from '../../assets/cashout/steam.svg';
import xbox  from '../../assets/cashout/xbox.svg';
import nintendo  from '../../assets/cashout/nintendo.svg';
import blizzard  from '../../assets/cashout/blizzard.svg';
import csgo  from '../../assets/cashout/csgo.svg';
import fortnite  from '../../assets/cashout/fortnite.svg';
import lol  from '../../assets/cashout/lol.svg';


const Cashout = () => {

    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('');

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://188.213.25.184:8081')
        .then(res => {
        if(res.data.Status === "Success") {
            setAuth(true);
        } else {
            setAuth(false);
            setMessage(res.data.Error);
        }
        })
        .then(err => console.log(err));
    }, [])

    return (

        <div>
            <Navbar />
                {
                    auth ?

                    <div className="main__cashout">
                        <div className="main__cashout-content">
                        <div className="title-desc">
                            <h2>CASHOUT</h2>
                            <p>Here you can choose your cashout method and exchange your points</p>
                        </div>
                        <div className="cashout__display">
                            <div className="type">
                                <h2>CASHOUT MONEY</h2>
                                <div className="row">
                                    <div className="cashout" style={{ backgroundColor: "#2595d8" }}>
                                    <img src={paypal} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#f9a33c" }}>
                                        <img src={btc} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#293740" }}>
                                        <img src={stake} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#6972ba" }}>
                                        <img src={eth} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#65667e" }}>
                                        <img src={ltc} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#d8b06c" }}>
                                        <img src={doge} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#144371" }}>
                                        <img src={faucetpay} />
                                    </div>

                                </div>
                            </div>

                            <div className="type">
                                <h2>CASHOUT GIFTCARDS</h2>
                                <div className="row">
                                    <div className="cashout" style={{ backgroundColor: "#11171e" }}>
                                    <img src={amazon} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#fff" }}>
                                        <img src={visa} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#fff" }}>
                                        <img src={googleplay} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#fff" }}>
                                        <img src={netflix} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#5cd68a" }}>
                                        <img src={spotify} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#fff" }}>
                                        <img src={zalando} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#373a6f" }}>
                                        <img src={steam} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#208e3e" }}>
                                        <img src={xbox} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "red" }}>
                                        <img src={nintendo} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#0b1015" }}>
                                        <img src={blizzard} />
                                    </div>

                                </div>
                            </div>

                            <div className="type" style={{ paddingBottom: "75px" }}>
                                <h2>CASHOUT GAME STUFF</h2>
                                <div className="row">
                                    <div className="cashout" style={{ backgroundColor: "#df8f20" }}>
                                    <img src={csgo} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#027efc" }}>
                                        <img src={fortnite} />
                                    </div>

                                    <div className="cashout" style={{ backgroundColor: "#54482f" }}>
                                        <img src={lol} />
                                    </div>

                                </div>
                            </div>
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

export default Cashout;
