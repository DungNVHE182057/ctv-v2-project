import Editor from "@monaco-editor/react";

const MyEditor = ({onChange, code}) => {
    
    

    const handleValueChange = (value) => {
        onChange(value);
    }
    return (
        <Editor
            height={"40vh"}
            width={"50vw"}
            theme={"vs-dark"}
            language={"css"}
            value={code}
            onChange={handleValueChange}
        />
    )
}
export default MyEditor;