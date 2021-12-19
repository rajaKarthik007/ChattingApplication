import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Login(props){
    function validate1(event){
        event.preventDefault();
                var id = document.getElementsByClassName("name")[0];
                var pass = document.getElementsByClassName("pass")[0];
                var msg = document.getElementById("error");
                if(id.value.trim() == ""){
                    id.style.border = "solid 2px red";
                    msg.innerHTML = "Enter a valid ID";
                    return false;
                }else if(id.value.trim().length < 1){
                    id.style.border = "solid 2px red";
                    msg.innerHTML = "ID should be atleast 5 characters long";
                    return false;
                }else if(pass.value.trim().length < 3){
                    pass.style.border = "solid 2px red";
                    msg.innerHTML = "Password should have atleast 5 characters";
                    return false;
                }else{
                    props.lfn(id.value.trim(), pass.value.trim());
                }
            }

    function validate2(event){
        event.preventDefault();
        var id = document.getElementsByClassName("name")[0];
        var pass = document.getElementsByClassName("pass")[0];
        var cpass = document.getElementsByClassName("cnfpass")[0];
        var msg = document.getElementById("error");
        if(id.value.trim() == ""){
            id.style.border = "solid 2px red";
            msg.innerHTML = "Enter a valid ID";
            return false;
        }else if(id.value.trim().length < 1){
            id.style.border = "solid 2px red";
            msg.innerHTML = "ID should be atleast 1 characters long";
            return false;
        }else if(pass.value.trim().length < 3){
            pass.style.border = "solid 2px red";
            msg.innerHTML = "Password should have atleast 3 characters";
            return false;
        }else if(pass.value != cpass.value){
            cpass.style.border = "solid 2px red";
            msg.innerHTML = "Passwords do not match";
            return false;
        }else{
            props.rfn(id.value.trim(), pass.value.trim());
        }
    }

    const [fstate, setfstate] = useState(true);

    function modal(){
        return(
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Your generated id is {props.md}. Use it for logging in every time😊 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Sign In -&gt;</button>
            </div>
          </div>
        </div>
      </div>
        );
      }
    
    function sup(){
        document.getElementsByClassName("form-floating")[2].style.display = "block";
        document.getElementById("Heading").innerHTML = "Sign Up";
        document.getElementById("Sup").style.display = "none";
        document.getElementById("Sin").innerHTML = "Sign Up";
        setfstate(!fstate);
        document.getElementById("name").innerHTML = "Nick Name";
        document.getElementById("error").innerHTML = "";
    }

    return (
        <div id="login_main">
            <form name="Form" onSubmit={fstate? validate1 : validate2}>
        <div id="cred">
            <h1 id="Heading">Sign In</h1>
            
            <div className="form-floating mb-3">
                <input name="uid" autocomplete="off" type="text" className="name form-control" id="floatingInput" placeholder="name@example.com" required />
                <label id="name" for="floatingInput">ID</label>
            </div>
            <div className="form-floating mb-3">
                <input name="pass" type="password" className="pass form-control" id="floatingPassword" placeholder="Password" required />
                <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating reg-field" >
                <input name="cpass" type="password" className="cnfpass form-control" placeholder="Password" />
                <label for="floatingPassword">Confirm Password</label>
              </div>
            <br />
            <p id="error" >{props.lt}</p>
            <button type="submit" className="btn btn-secondary" id="Sin">Sign In</button><br /> <br />
            <button type="button" className="btn btn-light" onClick={sup} value="1" id="Sup">Sign up</button>
            
        </div>
    </form>
        </div>
    )
}

export default Login;