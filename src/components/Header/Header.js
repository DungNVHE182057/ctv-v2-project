import classNames from "classnames/bind";
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
    return (  
        <h1 className={cx('game-name')}>Flexbox Game</h1>
    );
}

export default Header;