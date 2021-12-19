import Selfmsg from './Selfmsg';
import Othermsg from './Othermsg';
import React, { useEffect } from 'react';
import Axios from 'axios';

function Msgs(props){
    
    var id = props.id;
    const ms = props.ms;
    const changem = props.cms;
    const ip = props.ip;
    const fetch = async () => {
        const res = await Axios.get("http://"+ ip +":3001/");
        changem(res.data);
        console.log(res.data);
    }
    useEffect(() => {
        (async () => {
            await fetch();
        })();
    }, []);
    //var posts = props.messages;

    return (
    <div className="mess">
        {ms.map(ms => {
            
            return id===ms.ID? <Selfmsg msg={ms.msg} key={ms._key} time={ms.time_}/>: <Othermsg msg={ms.msg} key={ms._key} uname={ms.nname} time={ms.time_}/>
        })}
    </div>);
}

export default Msgs;