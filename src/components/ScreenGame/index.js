import classNames from "classnames/bind";
import Item from "./Item";
import styles from "./ScreenGame.module.scss";
import images from "../../assets/images";
const cx = classNames.bind(styles);

function ScreenGame() {
  console.log(images.logo);
  return (
    <>
      <section className={cx("screen")}>
        <div className={cx("forefront")}>

          {/* <Item image={images.logo} /> */}
          <Item image={images.item1} />
          <Item image={images.item2} />
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
