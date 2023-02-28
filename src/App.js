import React,{useState, useRef, useEffect} from 'react';  
import Description from './components/Description';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import MyEditor from './components/MyEditor';
import MyIframe from './components/MyIframe';
import { Level } from './gameData/Level';
function App() {
  const def = `<html>
  <body><h1>helloWorld</h1></body>
  <style></style>
  </html>
  `
  const [css, setCss] = useState('')
  const [srcDoc, setSrcDoc] = useState(def)
  const [desc, setDesc] = useState(Level[0].desc)
  const [html, setHtml] = useState(Level[0].html)
  const level = useRef(0)
  const frame = useRef(null)
  const [nextLev, setNextLev] = useState(true)
  
    const handleOutput = () => {
      const data = Level[level.current];
      const thisFrame = frame.current;
      
      for (let i  = 0; i < data.expect.length; ++i) {
         const anchor = thisFrame.contentWindow.document.styleSheets[0].cssRules[data.expect[i].id];
         const attribute = data.expect[i].atb;
         const value = data.expect[i].val;
         for (let j = 0; j < attribute.length; ++j) 
             if (anchor.style.getPropertyValue(attribute[j]) != value[j])
                 return true;
        
      }
      return false;
    }

    const check = () => {
      setNextLev(handleOutput())
    }
  
    useEffect(() => {
      const compile = setInterval(setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${(!css ? `body {
          color: red;
      }` : css)}</style>
      </html>
      `)
    , 250)
      return clearInterval(compile)
    }, [css, html])

  const nextLevel = () => {
    level.current = (level.current+1)%Level.length
    setHtml(Level[level.current].html)
    setDesc(Level[level.current].desc)
  }

  

  return (
    <div id='landing'>
      <Navigation/>
      <div className='left-screen'>
        <Description srcDoc={desc}/>
        <MyEditor onChange={setCss}/>
        
      </div>
      <div className='right-screen'>
        <div className='change-level'>
          <button onClick={nextLevel} disabled={nextLev}>click me!</button>
          <button onClick={check} >check</button>
        </div>
        <MyIframe srcDoc={srcDoc}  forwardRef={frame}/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
