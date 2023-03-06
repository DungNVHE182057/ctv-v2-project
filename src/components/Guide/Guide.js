import classNames from "classnames/bind";
import styles from "./Guide.module.scss";
const cx = classNames.bind(styles);
const Guide = ({ forwardRef, src }) => {
  return (
      <iframe
        src={src}
        ref={forwardRef}
        title="guide"
        className={cx("guide")}
      />
  );
};

export default Guide;
