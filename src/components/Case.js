import { useNavigate } from "react-router-dom";

const Case = (props) => {
  let navigate = useNavigate();
  const onCaseClick = () => {
    navigate("/innercase");
  };
  return (
    <div style={{ maxWidth: "500px" }}>
      <figure>
        <img
          style={{ maxHeight: "37.5rem" }}
          className="max-w-lg max-h"
          max-hei
          alt="cases"
          src={props.path}
        />
        <figcaption className="text-ft-grey text-sm mt-6 font-medium">
          {props.caption}
        </figcaption>
        <h1 className="text-plan-color text-3xl mt-3 font-extrabold">{props.heading}</h1>
        <p className="text-lit-grey text-base font-normal mt-2">{props.text}</p>
        <a
          onClick={onCaseClick || null}
          className="text-sm cursor-pointer text-cycan mt-4"
        >
          <span className="underline">Read story</span>
          <img className="inline-block" src="./images/r-arrow.png"/>
        </a>
      </figure>
    </div>
  );
};

export default Case;
