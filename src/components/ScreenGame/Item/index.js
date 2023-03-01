import classNames from "classnames/bind";
import styles from "./Item.module.scss";

const cx = classNames.bind(styles);
function Item(props) {
    return ( 
        <div className={cx('item-container')}>
            <div >
                <img className={cx('item')} src={props.image} alt="noImg" />
            </div>
        </div>
     );
}

export default Item;