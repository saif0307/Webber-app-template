const Feature = (props) => {
     return (
         <div className="flex mx-auto  flex-col items-center gap-2 w-96 h-40 text-center">
             <img className="h-8 w-6" src={props.source}/>
             <h2 className="text-2xl mt-6 font-semibold text-plan-color">{props.heading}</h2>
             <p className="text-lg mt-2 font-normal">{props.text}</p>
         </div>
     )
}

export default Feature