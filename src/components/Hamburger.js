import { useNavigate } from "react-router-dom";

const Hamburger = (props) => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/mobilemenu')        
    }
    const styles = {width: '35px',
    height: '5px',
    backgroundColor: 'black',
    margin: '6px 0'}
    return(
        <div onClick={onClick} className={`wd-full md:hidden flex items-end justify-end ${props.hidden}`}> 
    <button className="m-5">
        <div style={styles}></div>
        <div style={styles}></div>
        <div style={styles}></div>
    </button>
    </div>
    )
}
export default Hamburger