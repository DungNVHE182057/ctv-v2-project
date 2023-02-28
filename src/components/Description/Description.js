import classNames from "classnames/bind";
import styles from './Description.module.scss'

const cx = classNames.bind(styles);

const Description = ({srcDoc}) => {
    return (
        <iframe className={cx("descript")}
        title="Desc"
        srcDoc={srcDoc}
        />
    )
}
export default Description;