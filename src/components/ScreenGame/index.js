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
          <Item image={images.item1} />
          <Item image={images.item1} />
          <Item image={images.item1} />
          <Item image={images.item1} />
          <Item image={images.item2} />
          <Item image={images.item2} />
          <Item image={images.item2} />
          <Item image={images.item2} />
          <Item image={images.item2} />
          <Item image={images.item3} />
          <Item image={images.item3} />
          <Item image={images.item3} />
          <Item image={images.item3} />
          <Item image={images.item3} />
        </div>
        <div className={cx("background")}>
          <Item image={images.item4} />
          <Item image={images.item4} />
          <Item image={images.item4} />
          <Item image={images.item4} />
          <Item image={images.item4} />
          <Item image={images.item5} />
          <Item image={images.item5} />
          <Item image={images.item5} />
          <Item image={images.item5} />
          <Item image={images.item5} />
          <Item image={images.item6} />
          <Item image={images.item6} />
          <Item image={images.item6} />
          <Item image={images.item6} />
          <Item image={images.item6} />
        </div>
      </section>
    </>
  );
}

export default ScreenGame;
