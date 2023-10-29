import { useState, useEffect } from "react";
import Editor from "./components/Editor";

function App() {
  // const [html, setHtml] = useState('');
  // const [css, setCss] = useState('');
  // const [js, setJs] = useState('');
  // const [srcDoc, setSrcDoc] = useState('');

  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     setSrcDoc(`
  //       <html>
  //       <body> ${html} </body>
  //       <style> ${css} </style>
  //       <script> ${js} </script>
  //       </html>
  //       `)
  //   }, 250)
  //   return () => clearTimeout(timeOut)
  // }, [html, css, js])

  return (
    <>
     <div classname="pane top-pane">
        
        <Editor />
        <Editor />
        <Editor />

      </div>

    <div className="pane">

      <iframe
    //  srcDoc={srcDoc}
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
