const Case = (props) => {
    return (
        <div style={{maxWidth:'500px'}}>
            <figure>
                <img style={{maxHeight:'37.5rem'}} className="max-w-lg max-h" max-hei alt="cases" src={props.path}/>
                <figcaption className="text-ft-grey text-sm mt-6">{props.caption}</figcaption>
                <h1 className="text-plan-color text-3xl mt-3">{props.heading}</h1>
                <p className="text-lit-grey mt-2">{props.text}</p>
                <a href="#" className="text-sm text-cycan mt-4">Read story</a>
            </figure>
        </div>
    )
}

export default Case