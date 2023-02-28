import classNames from "classnames/bind";
import styles from "./Item.module.scss";

const cx = classNames.bind(styles);
function Item(props) {
    return ( 
        <div className={cx('item-container')}>
            <div className={cx('item')}>
                <img src={props.image} alt="" />
            </div>
        </div>
     );
}

export default Item;