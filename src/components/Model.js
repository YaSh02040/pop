function Model(props){

    return(
    <div className="popup">
        <label>name</label><br></br>
        <input></input><br></br>
        <button className="btn"onClick={props.onClick}>close</button>
        <span className="yas"onClick={props.onClick}>x</span>
    </div>
    )
}
export default Model;