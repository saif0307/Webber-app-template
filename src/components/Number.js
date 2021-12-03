const Number = (props) => {
  return (
    <div
      style={{
        boxShadow:
          "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
      }}
      className="w-64 h-56 flex flex-col items-center justify-center bg-white rounded-2xl"
    >
      <h1 className="text-5xl font-extrabold text-h-color">{props.heading}</h1>
      <p className="text-lg text-ft-grey font-normal">{props.text}</p>
    </div>
  );
};


export default Number