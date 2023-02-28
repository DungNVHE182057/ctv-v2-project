import React, { useState, useRef, useEffect } from "react";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import MyEditor from "./components/Editor/MyEditor";
import MyIframe from "./components/Iframe/MyIframe";
import { Level } from "./components/gameData/Level";
import Header from "./components/Header";
import ScreenGame from "./components/ScreenGame";
function App() {
  const def = `<html>
  <body><h1>helloWorld</h1></body>
  <style></style>
  </html>
  `;
  const [css, setCss] = useState("");
  const [srcDoc, setSrcDoc] = useState(def);
  const [desc, setDesc] = useState(Level[0].desc);
  const [html, setHtml] = useState(Level[0].html);
  const level = useRef(0);
  const frame = useRef(null);
  const [nextLev, setNextLev] = useState(true);

  const handleOutput = () => {
    const data = Level[level.current];
    const thisFrame = frame.current;

    for (let i = 0; i < data.expect.length; ++i) {
      const anchor =
        thisFrame.contentWindow.document.styleSheets[0].cssRules[
          data.expect[i].id
        ];
      const attribute = data.expect[i].atb;
      const value = data.expect[i].val;
      for (let j = 0; j < attribute.length; ++j)
        // eslint-disable-next-line
        if (anchor.style.getPropertyValue(attribute[j]) != value[j])
          return true;
    }
    return false;
  };

  const check = () => {
    setNextLev(handleOutput());
  };

  useEffect(() => {
    const compile = setInterval(
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${
          !css
            ? `body {
          color: red;
      }`
            : css
        }</style>
      </html>
      `),
      250
    );
    return clearInterval(compile);
  }, [css, html]);

  const nextLevel = () => {
    level.current = (level.current + 1) % Level.length;
    setHtml(Level[level.current].html);
    setDesc(Level[level.current].desc);
  };

  return (
    <div id="landing">
      <Header />
      {/* <Navigation /> */}
      <div className="d-flex">
        <div className="left-screen" style={{width:'50%'}}>
          <Description srcDoc={desc} />
          <MyEditor onChange={setCss} />
          <div className="change-level">
            <button onClick={nextLevel} disabled={nextLev}>
              Next
            </button>
            <button onClick={check}>Check</button>
          </div>
          <MyIframe srcDoc={srcDoc} forwardRef={frame} />
        </div>
        <div className="right-screen" style={{width:'50%'}}>
          <ScreenGame />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
