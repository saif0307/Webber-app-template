const SmCase = (props) => {
  return (
    <div>
      <figure>
        <img alt="caption-1" src={props.path} />
        <figcaption className="text-sm text-ft-grey mt-6">
          {props.caption}
        </figcaption>
        <h1 className="mt-3">{props.heading}</h1>
        <p className="mt-2 text-ft-grey" style={{ maxWidth: "251px" }}>
          {props.text}
        </p>
        <a className="text-sm cursor-pointer text-cycan mt-4">
          <span className="underline">Read story</span>
          <img alt="small case" className="inline-block" src="./images/r-arrow.png" />
        </a>
      </figure>
    </div>
  );
};

export default SmCase;
