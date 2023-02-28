import Editor from "@monaco-editor/react";
import classNames from "classnames/bind";
import styles from './Editor.module.scss';
const cx = classNames.bind(styles);

const MyEditor = ({onChange}) => {

    const handleValueChange = (value) => {
        onChange(value);
    }
    return (
        <Editor
            height={"40vh"}
            width={"50vw"}
            theme={"vs-dark"}
            language={"css"}
            value={""}
            onChange={handleValueChange}
        />
    )
}
export default MyEditor;