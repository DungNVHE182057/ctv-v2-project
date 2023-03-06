import Editor from "@monaco-editor/react";
import React, {useRef} from "react";
const MyEditor = ({onChange, defaultCode}) => {
    const editorRef = useRef(null)
    const handleValueChange = (value) => {
        onChange(value);
    }

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor
    }

    const reset = () => {
        editorRef.current.setValue(defaultCode)
    }
    
    return (
        <div width={"100%"}>
            <button onClick={reset} style={{marginBottom : "10px"}}>Reset</button>
            <Editor
                height={"200px"}
                width={"100%"}
                theme={"vs-dark"}
                language={"css"}
                value={defaultCode}
                onChange={handleValueChange}
                onMount={handleEditorDidMount}
            />
        </div>
    )
}
export default MyEditor;