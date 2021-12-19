import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function InpBox(props){
    const [Msg, setMsg] = useState("");
    const [_msgid, setmsgid] = useState(0);
    const func = props.fun;
    var messages = props.ms;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() ;
    var dateTime = time;
    const insert = () => {
        setmsgid(_msgid-1);
        if(Msg === ""){return;}
        var newmsg = {
            _key: _msgid,
            ID: props.id,
            msg: Msg,
            time_: dateTime
        
        }
        func(newmsg);
    }
    return (
        <div className="inpfield">
            <div className="input-group mb-3">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Type a message" 
                aria-label="Recipient's username" 
                aria-describedby="button-addon2"
                onChange={(e)=>{
                    setMsg(e.target.value);
                }} />
                <button type="button" className="btn btn-warning btn-lg" onClick={insert}>POST</button>
            </div>
            
        </div>
    );
}

export default InpBox;