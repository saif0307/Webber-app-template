const Question = (props) => {
    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-2xl text-plan-color font-semibold">{props.heading}</h1>
            <p className="text-base mt-3 text-lit-grey">{props.text}</p>
        </div>
    )
}

export default Question