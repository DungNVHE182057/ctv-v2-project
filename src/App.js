import React, { useState, useRef, useEffect } from "react";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
import MyEditor from "./components/Editor/MyEditor";
import MyIframe from "./components/Iframe/MyIframe";
import { Level } from "./components/ScreenGame/Level";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastMsg } from "./components/ScreenGame/ToastMsg";
import Guide from "./components/Guide/Guide";
import UserData from "./components/ScreenGame/UserData";

function App() {
  const [css, setCss] = useState("");
  const [startCss, setStartCss] = useState(Level[0].css);
  const [toEditor, setToEditor] = useState(Level[0].toEditor);
  const [srcDoc, setSrcDoc] = useState("");
  const [desc, setDesc] = useState(Level[0].desc);
  const [html, setHtml] = useState(Level[0].html);
  const level = useRef(0);
  const streak = useRef(0);
  const frame = useRef(null);
  const guide = useRef(null);
  const guideButton = useRef(null);
  const [nextLev, setNextLev] = useState(true);

  const handleOutput = () => {
    const data = Level[level.current];
    const thisFrame = frame.current;

    for (let i = 0; i < data.expect.length; ++i) {
      const anchor =
        thisFrame.contentWindow.document.styleSheets[1].cssRules[
          data.expect[i].id
        ];
      const attribute = data.expect[i].atb;
      const value = data.expect[i].val;
      for (let j = 0; j < attribute.length; ++j) {
        // eslint-disable-next-line
        if (anchor == undefined) return true;
        // eslint-disable-next-line
        if (anchor.style.getPropertyValue(attribute[j]) != value[j])
          return true;
      }
    }
    return false;
  };

  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showErrorToast = (msg) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const check = () => {
    const output = handleOutput();
    checkNextButton(output);
    setNextLev(output);
    
    if (output) {
      UserData[level.current] = css
      if (streak.current > 0) streak.current = 0;
      else streak.current = streak.current - 1;
      showErrorToast(
        ToastMsg.failure[
          Math.round(
            streak.current < -1
              ? Math.random() * ToastMsg.failure.length
              : Math.random()
          )
        ]
      );
    } else {
      UserData[level.current] = css
      if (streak.current < 0) streak.current = 0;
      else streak.current = streak.current + 1;
      showSuccessToast(
        ToastMsg.successes[
          Math.round(
            streak.current > 1
              ? Math.random() * ToastMsg.successes.length
              : Math.random()
          )
        ]
      );
    }
  };

  useEffect(() => {
    const compile = setInterval(
      setSrcDoc(`
    <html>
      <body>${html}</body>
      <style>${startCss}</style>
      <style>${css}</style>
    </html>
    `),
      250
    );
    return clearInterval(compile);
  }, [css, html, startCss]);

  const showGuide = () => {
    const thisGuide = guide.current;
    const thisGuideButton = guideButton.current;
    console.log(guide.current);
    // eslint-disable-next-line
    if (thisGuide.style.display == "none" || thisGuide.style.display == "") { thisGuide.style.display = "block"; thisGuideButton.innerHTML = "Close"}
    else { thisGuide.style.display = "none"; thisGuideButton.innerHTML = "Guide"}
  };
  const toLevel = (add) => {
    level.current = (level.current + add) % Level.length;
    console.log(level.current)
    setHtml(Level[level.current].html);
    setDesc(Level[level.current].desc);
    setStartCss(Level[level.current].css);
    setToEditor(UserData[level.current] == undefined ? Level[level.current].toEditor : UserData[level.current]);
    setNextLev(true);
  };


  const checkNextButton = (output) => {
    const button = document.getElementsByClassName("btn-next")[0];
    if (output) {
      button.style.display = "none";
    } else {
      button.style.display = "block";
      button.style.color = "#fff";
    }
  };

  

  const handleButtonNextClick = () => {
    toLevel(1);
    const back = document.getElementsByClassName("btn-back")[0]
    back.style.display = "block"
    const next = document.getElementsByClassName("btn-next")[0];
    if (UserData[level.current] == undefined) next.style.display = "none";
  };

  const handleButtonBackClick = () => {
    if (level.current > 0) toLevel(-1)
    if (level.current == 0) {
      document.getElementsByClassName("btn-back")[0].style.display = "none"
    }
  }
  
  return (
    <div id="landing">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Header />

      <div className="app">
        <div className="wrapper">
          <div className="left-screen">
            <Description srcDoc={desc} />
              <MyEditor onChange={setCss} defaultCode={toEditor} />
          </div>
          <div className="right-screen">
            <MyIframe srcDoc={srcDoc} forwardRef={frame} />
          </div>
          <Guide
            forwardRef={guide}
            src={"/Guide/index.html"}
          />
        </div>
        <div className="change-level">
          <button className="btn-check" onClick={check}>
            Check
          </button>
          <button
            style={{display:((UserData[level.current] == undefined && nextLev) ? "none" : "block")}}
            className="btn-next " 
            onClick={handleButtonNextClick}
            
          >
            Next
          </button>
          <button
            className="btn-guide-mobile"
            onClick={showGuide}
            ref={guideButton}
          >
            Guide
          </button>
          <button
          className="btn-back"
          onClick={handleButtonBackClick}
          style={{display : (level.current == 0 ? "none" : "block")}}
          >Back</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
