const MyIframe = ({srcDoc}) => {
    return (
        <iframe
            height={"90%"}
            width={"100%"}
            title="OUTPUT"
            className="output"
            srcDoc={srcDoc}
        />
    )

}

export default MyIframe;