import classNames from "classnames/bind";
import Item from "./Item";
import styles from "./ScreenGame.module.scss";

const cx = classNames.bind(styles);

function ScreenGame() {
  return (
    <>
      <section className={cx("screen")}>
        <div className={cx("forefront")}>
          <Item image="../assets/image/level1/frog-green.svg" />
          <Item image="" />
          <Item image="" />
          <Item image="" />
          <Item image="" />
        </div>
        <div className={cx("background")}>
          <Item image="" />
          <Item image="" />
          <Item image="" />
          <Item image="" />
          <Item image="" />
          <Item image="" />
        </div>
      </section>
    </>
  );
}

export default ScreenGame;
