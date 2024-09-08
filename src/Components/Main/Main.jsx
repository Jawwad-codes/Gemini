import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { contex } from "../../Context/Context";

const Main = () => {
  const {
    onSend,
    RecentPromt,
    loading,
    ResultData,
    Input,
    setInput,
    Result,
    setRecentPromt,
    setPreviousPromt,
    PreviousPromt,
  } = useContext(contex);

  const cardPrompt = (event) => {
    const promt = event.target.innerText;
    onSend(promt);
  };
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!Result ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div onClick={(e) => cardPrompt(e)} className="card">
                <p>Suggest beautiful places to see on an upcomming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div onClick={(e) => cardPrompt(e)} className="card">
                <p>Who is the founder of react.js</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div onClick={(e) => cardPrompt(e)} className="card">
                <p>how brainstorming help us to work properly</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div onClick={(e) => cardPrompt(e)} className="card">
                <p>write some html cards code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="Result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{RecentPromt}</p>
              </div>
              <div className="getResult">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: ResultData }}></p>
                )}
              </div>
            </div>
          </>
        )}
        <div className="main-bottom">
          <div className="search-bar">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={Input}
              type="text"
              placeholder="Enter a promt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {Input ? (
                <img
                  onClick={() => onSend(Input)}
                  src={assets.send_icon}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};
export default Main;
