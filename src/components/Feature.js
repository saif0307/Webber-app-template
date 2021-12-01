const Feature = (props) => {
     return (
         <div className="flex mx-auto  flex-col items-center gap-2 w-96 h-40 text-center">
             <img className="h-8 w-6" src={props.source}/>
             <h2 className="text-2xl">{props.heading}</h2>
             <p className="text-lg">{props.text}</p>
         </div>
     )
}

export default Feature