import React, { useState, useRef, useEffect } from "react";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
import MyEditor from "./components/Editor/MyEditor";
import MyIframe from "./components/Iframe/MyIframe";
import { Level } from "./components/ScreenGame/Level";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [css, setCss] = useState("");
  const [startCss, setStartCss] = useState(Level[0].css);
  const [toEditor, setToEditor] = useState(Level[0].toEditor);
  const [srcDoc, setSrcDoc] = useState("");
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
        thisFrame.contentWindow.document.styleSheets[1].cssRules[
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
    console.log(startCss);
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

  const nextLevel = () => {
    level.current = (level.current + 1) % Level.length;
    setHtml(Level[level.current].html);
    setDesc(Level[level.current].desc);
    setStartCss(Level[level.current].css);
    setToEditor(Level[level.current].toEditor);
    setNextLev(true);
  };

  return (
    <div id="landing">
      <Header />

      <div className="app">
        <div className="wrapper">
          <div className="left-screen" >
            <Description srcDoc={desc} />
            <MyEditor onChange={setCss} code={toEditor} />
            <div className="change-level">
              <button onClick={check}>Check</button>
              <button onClick={nextLevel} disabled={nextLev}>
                Next
              </button>
            </div>
          </div>
          <div className="right-screen" >
            <MyIframe srcDoc={srcDoc} forwardRef={frame} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
