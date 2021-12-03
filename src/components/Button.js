const Button = (props) => {
  return (
    <button
      style={
        {
          // backgroundColor:props.color,
          // color: props.textColor
        }
      }
      className={`box-border font-normal ${props.width || "w-20"} ${
        props.height || "h-10"
        } rounded-sm ${props.textColor} ${props.color} hover:${props.hover}`}
    >
      {props.name}
    </button>
  );
};

export default Button;
