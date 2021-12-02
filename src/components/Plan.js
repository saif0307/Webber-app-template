import Button from "./Button";

const Plan = (props) => {
  return (
    <div className={`max-w-6xl w-72 items-center flex flex-col gap-12 text-center ${props.classes}`} style={props.custom}>
      <h1 style={props.gradient} className="text-3xl  text-ft-grey">{props.planName}</h1>
      <h2 className="text-4xl text-plan-color">
        {props.planPrice}
        <span className="text-base"> /month</span>
      </h2>
      <ul className="flex flex-col items-center justify-center gap-12">
        <li className="h-6">
          <img
            alt="icon tick"
            src={!props.first ? "./images/true.png" : "./images/false.png"}
          />
        </li>
        <li className="h-6">
          <img
            alt="icon tick"
            src={!props.second ? "./images/true.png" : "./images/false.png"}
          />
        </li>
        <li className="h-6">
          <img
            alt="icon tick"
            src={!props.second ? "./images/true.png" : "./images/false.png"}
          />
        </li>
        <li>{props.users}</li>
        <li className="h-6">
          <img
            alt="icon tick"
            src={!props.fifth ? "./images/true.png" : "./images/false.png"}
          />
        </li>
        <li className="h-6">
          <img
            alt="icon tick"
            src={!props.sixth ? "./images/true.png" : "./images/false.png"}
          />
        </li>
        <li className="h-6">
          <img
            alt="icon tick"
            src={!props.seventh ? "./images/true.png" : "./images/false.png"}
          />
        </li>
        <li className="h-6">
          <img
            alt="icon tick"
            src={!props.eight ? "./images/true.png" : "./images/false.png"}
          />
        </li>
      </ul>
      <Button
        name="Choose Plan"
        height="h-11"
        width="w-40"
        color={props.color}
        textColor={props.textColor}
        hover={props.hover}
      />
      <div></div>
    </div>
  );
};

export default Plan;
