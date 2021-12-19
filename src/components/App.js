import InpBox from './InpBox';
import Axios from 'axios';
import qs from "query-string";
import Login from './Login';
import Msgs from './Msgs';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  const [ip, setip] = useState("172.40.12.205")
  const [id, setId] = useState(parseInt(localStorage.getItem('userId')));
  console.log(id)
  const [msgs, setmsgs] = useState([]);
  const [mid, setmid] = useState();
  const [ltxt, setltxt] = useState("");
function LOgin(lid, pass){
  const params = { ID: parseInt(lid, 10), Pass: pass};
  
  Axios.post('http://'+ip+':3001/login', qs.stringify(params))
  .then((res)=> {
    localStorage.setItem('userId', parseInt(res.data))
    setId(parseInt(localStorage.getItem('userId')));
    if(id === -1){
      setltxt("Incorrect Credentials");
    }else{
      setltxt("");
    } 
  })
  .catch((err) => {
    console.log(err);
  });

}

function REgister(nname, pass){
  const params = { Nname: nname, Pass: pass};
  Axios.post('http://'+ip+':3001/register', qs.stringify(params))
  .then((res) => {
    setmid(parseInt(res.data));
  })
  .catch((err) => {
    console.log(err);
  })
  
}



function insertms(data){
  console.log(data.ID);
  console.log(data.msg);
  const params = { Message: data.msg,Id: data.ID};
  Axios.post('http://'+ip+':3001/insert', qs.stringify(params))
  .then((res)=> {
  })
  .catch((err) => {
    console.log(err);
  });
  setmsgs([...msgs, data]);
}

  if(Number.isNaN(id)){
    return <Login lfn={LOgin} rfn={REgister} lt={ltxt} md={mid} cmd={setmid}/>  
  }
  else{
  return (
    <Router>
      <Routes>
        <Route 
         exact
         path="/" 
         element={<div><InpBox fun={insertms} ms={msgs} id={id}/><Msgs ms={msgs} cms={setmsgs} id={id} ip={ip}/></div>}
         
        >
        </Route>
      </Routes>
    </Router>
  
  );
  }
}

export default App;
// green: 49FF00
// yellow: FBFF00
// red:FF0000
// orange:FF9300

// FF865E
// A2D2FF