import classNames from "classnames/bind";
import styles from "./Iframe.module.scss";

const cx = classNames.bind(styles);

const MyIframe = ({srcDoc, forwardRef}) => {

    return (
        <iframe
            ref={forwardRef}
            title="OUTPUT"
            className={cx('screen')}
            srcDoc={srcDoc}
        />
    )

}

export default MyIframe;