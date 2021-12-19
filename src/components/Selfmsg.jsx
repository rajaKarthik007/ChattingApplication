import 'bootstrap/dist/css/bootstrap.min.css';

function Selfmsg(props){
    return (
        <div>
            <div className="yname">
                <p>You</p>
            </div>
            
            <div className="container-sm self msg">
            {props.msg}
            <br />
            <div className="_time">
                <p>{props.time}</p>
            </div> 
            </div>

        </div>
        
    );
}

export default Selfmsg;