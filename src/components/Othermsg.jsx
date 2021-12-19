
import 'bootstrap/dist/css/bootstrap.min.css';


function Othermsg(props){
 
    return (
        <div>
            <div className="oname">
                <p>{props.uname}</p>
            </div>
            <div className="container-sm other msg">
            {props.msg}
            <br />
            <div className="time_">
                <p>{props.time}</p>
            </div>
            </div>
        </div>
        
    );
}

export default Othermsg;