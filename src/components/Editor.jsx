import React, {useState, useEffect} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
// import { Controlled as ControlledEditor } from 'react-codemirror2'
// import { Controlled as CodeMirror } from "react-codemirror2";
import {Controlled as CodeMirror} from 'react-codemirror2'


const Editor = (props) => {
    const { displayName, language, value, onChange } = props;
    const [open, setOpen] = useState(true);

    function handleChange(editor, data, value) {
        onChange(value);
    }

    // var editors = document.getElementsByClassName('code-mirror-wrapper');
    // for (let i = 1; i < editors.length; i++) {
    //     editors[i].remove()
    // }
       
    return (
        <div className={`editor-container ${open ? '' : 'collapsed'} `}>
            <div className='editor-title'>
                {displayName}
                <button>O/C</button>
            </div>

            <CodeMirror
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-wrapper'
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: "material",
                }}
            />            
        </div>
    )
}

export default Editor