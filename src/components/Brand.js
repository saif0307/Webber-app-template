

const Brand = (props) => {
    return (
        <div style={{boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)"}} className="w-44 h-24 flex justify-evenly items-center ms-auto">
            <img alt="logo" src={props.path}/>
        </div>
    )
}

export default Brand