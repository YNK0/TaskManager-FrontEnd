import "./taskbox.css"
import x from "../assets/x.svg"
import rigth from "../assets/rigth.svg"


export default function TaskBox({tasks, onDelete, nextValue}) {
    const { title, description, status} = tasks;

    const xImg = (
        <img 
            src={x} 
            alt="x" 
            className="svg-buttons x" 
        />);

    const rightImg = (
        <img
          src={rigth}
          alt="->"
          className="svg-buttons rigth"
        />);
    
    return (
        <div className="taskbox">
            <div className="box-details">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="img-div">
                <button className="button" onClick={() => onDelete()}>{xImg}</button>
                <button className="button" onClick={() => nextValue()}>{status !== "CLOSE" ? rightImg : null}</button>
            </div>
        </div>
    )
}