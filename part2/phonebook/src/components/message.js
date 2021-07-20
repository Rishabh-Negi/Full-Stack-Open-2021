const Message = ({ message }) => {
    if (message === null || message === '')
        return null
    const footerStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }


    return (
        <div style={footerStyle} >
            {message}
        </div >
    )
}

export default Message