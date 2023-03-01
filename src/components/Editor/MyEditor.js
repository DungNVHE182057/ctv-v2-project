import Editor from "@monaco-editor/react";
import classNames from "classnames/bind";
import styles from './Editor.module.scss'

const cx = classNames.bind(styles);
const MyEditor = ({onChange, code}) => {
    
    

    const handleValueChange = (value) => {
        onChange(value);
    }
    return (
        <Editor
            height={"55%"}
            width={"100%"}
            className={cx('editor')}
            theme={"vs-dark"}
            language={"css"}
            value={code}
            onChange={handleValueChange}
        />
    )
}
export default MyEditor;