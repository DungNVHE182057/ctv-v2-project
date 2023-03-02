import Editor from "@monaco-editor/react";
const MyEditor = ({onChange, code}) => {
    const handleValueChange = (value) => {
        onChange(value);
    }
    return (
        <Editor
            height={"55%"}
            width={"100%"}
            theme={"vs-dark"}
            language={"css"}
            value={code}
            onChange={handleValueChange}
        />
    )
}
export default MyEditor;