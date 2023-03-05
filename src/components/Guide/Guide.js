const Guide = ({forwardRef, src}) => {

    return (
        <iframe 
        src={src}
        ref={forwardRef}
        title="guide" 
        className="guide"
        width={"720px"}
        height={"480px"}
        position={"relative"}
        />
    )

}

export default Guide;