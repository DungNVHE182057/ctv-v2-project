const MyIframe = ({srcDoc, forwardRef}) => {


    return (
        <iframe
            height={"90%"}
            ref={forwardRef}
            width={"100%"}
            title="OUTPUT"
            className="output"
            srcDoc={srcDoc}
        />
    )

}

export default MyIframe;