import { useState, useEffect } from "react";
import Editor from "./components/Editor";
import UseLocalStorage from "./hooks/UseLocalStorage";

function App() {
  const [html, setHtml] = UseLocalStorage('html','');
  const [css, setCss] = UseLocalStorage('css','');
  const [js, setJs] = UseLocalStorage('js','');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
        <html>
        <body> ${html} </body>
        <style> ${css} </style>
        <script> ${js} </script>
        </html>
        `)
    }, 250)
    return () => clearTimeout(timeOut)
  }, [html, css, js])

  return (
    <>
     <div style={{display:"flex"}} classname="pane top-pane">
        
        <Editor 
        language="xml" 
        displayName="HTML" 
        value={html} 
        onChange={setHtml} />
        <Editor 
        language="css"
        displayName="CSS" 
        value={css} 
        onChange={setCss} />
        <Editor 
        language="javascript" 
        displayName="JS" 
        value={js} 
        onChange={setJs}/>

      </div>

    <div className="pane">

      <iframe
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"         
      width="100%"    
      height="100%"   
      />

    </div>
    </>
  );
}

export default App;
