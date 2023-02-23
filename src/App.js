import React,{useState, useEffect} from 'react';  
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
  const [level, setLevel] = useState(1)
  
  useEffect(() => {
    const compileCode = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
      </html>
      `)
    }, 250)
    return () => clearTimeout(compileCode)
  }, [css, html])
  const nextLevel = () => {
    console.log(level)
    setLevel((level+1)%Level.length)
    setHtml(Level[level].html)
    setDesc(Level[level].desc)
    setSrcDoc("");
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
          <button onClick={nextLevel}>click me!</button>
        </div>
        <MyIframe srcDoc={srcDoc}/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
