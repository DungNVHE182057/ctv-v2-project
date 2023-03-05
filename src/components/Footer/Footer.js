import Editor from "@monaco-editor/react";
import classNames from "classnames/bind";
import styles from './Footer.module.scss'

const cx = classNames.bind(styles);

const Footer = () => {
    return(
        <footer>
            <h1 className={cx('team-name')}>Create By: Team 3 CTV</h1>
        </footer>
    )
}

export default Footer;