import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { contex } from "../../Context/Context";

const Main = ({ Theme, setTheme }) => {
  const { onSend, RecentPromt, loading, ResultData, Input, setInput, Result } =
    useContext(contex);

  const cardPrompt = (event) => {
    const promt = event.target.innerText;
    onSend(promt);
  };
  const Themetoggle = () => {
    Theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={assets.user_icon} alt="" />
          <img
            onClick={() => {
              Themetoggle();
            }}
            style={{ width: "20px", backgroundColor: "transparent" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQaiPA71IlRh9ao2Zt-rglKjxjMoc-IBqWQ&s"
            alt=""
          />
        </div>
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
            <textarea
              onChange={(e) => setInput(e.target.value)}
              value={Input}
              rows={1}
              placeholder="Enter a prompt here"
              style={{ resize: "none", overflow: "hidden", width: "285px" }} // Disable resize, hide scrollbars
              onInput={(e) => {
                e.target.style.height = "auto"; // Reset the height
                e.target.style.height = `${e.target.scrollHeight}px`; // Set the height to fit the content
              }}
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
