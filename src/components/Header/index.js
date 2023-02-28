import classNames from "classnames/bind";
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
    return (  
    <p className={cx('red')}>yes</p>
    );
}

export default Header;