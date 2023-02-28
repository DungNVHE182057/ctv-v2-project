import classNames from "classnames/bind";
import styles from "./Iframe.module.scss";

const cx = classNames.bind(styles);

const MyIframe = ({srcDoc, forwardRef}) => {

    return (
        <iframe
            ref={forwardRef}
            width={"100%"}
            title="OUTPUT"
            className="output"
            srcDoc={srcDoc}
        />
    )

}

export default MyIframe;