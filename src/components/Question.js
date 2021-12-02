const Question = (props) => {
    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-2xl">{props.heading}</h1>
            <p className="text-base mt-3">{props.text}</p>
        </div>
    )
}

export default Question