/*Alumni gives donations to the campus via this page*/

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import axios from "axios";
//import Userprofile from "../../userprofile";
import { useState, useEffect, useRef } from "react";
import Login from "../login";
import "./styles.css";

import { useNavigate } from "react-router-dom";

const Alumni_payments = () => {
  const navigate = useNavigate();
  const userName = useRef("");
  const loggedIn = useRef(false);
  const [Login, setLogin] = useState(false);
  const [UserName, setUser] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    console.log("In use effect");
    axios
      .get("./login")
      .then((res) => {
        console.log("RESPONSE" + res);
        for (let x in res) {
          if (x == "data") {
            console.log("DATA" + res[x]);
            console.log(JSON.stringify(res[x]));

            for (let y in res[x]) {
              if (y == "user") setUser(res[x][y]);
              else setLogin(res[x][y]);
            }
          }
        }
        console.log(res["data"]["user"]);
      })
      .catch(console.log("errorrrr"));
  }, []);
  console.log("Calling from alumni_payments");
  console.log(userName);
  if (Login) {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-white">
          <div class="container-fluid">
            <Link to="../home" class="nav-link active">
              Home
            </Link>
            {/* <Link to="register" class="nav-link active">Register</Link>
            <Link to="login" class="nav-link active">Login</Link> */}
            <Link to="../payments" class="nav-link">
              Payments
            </Link>
            <Link to="../profile" class="nav-link active">
              Profile
            </Link>
          </div>
        </nav>
        <div class="container py-5">
          <div class="row mb-4">
            <div class="col-lg-8 mx-auto text-center">
              <h1 class="display-6"> Payment </h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 mx-auto">
              <div class="card ">
                <div class="card-header">
                  <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                    <ul
                      role="tablist"
                      class="nav bg-light nav-pills rounded nav-fill mb-3"
                    >
                      <li class="nav-item">
                        {" "}
                        <a
                          data-toggle="pill"
                          href="#credit-card"
                          class="nav-link active "
                        >
                          {" "}
                          <i class="fas fa-credit-card mr-2"></i> Credit Card{" "}
                        </a>{" "}
                      </li>
                    </ul>
                  </div>

                  <div class="tab-content">
                    <div
                      id="credit-card"
                      class="tab-pane fade show active pt-3"
                    >
                      <form role="form" onsubmit="event.preventDefault()">
                        <div class="form-group">
                          {" "}
                          <label for="username">
                            <h6>Card Owner</h6>
                          </label>{" "}
                          <input
                            type="text"
                            name="username"
                            placeholder="Card Owner Name"
                            required
                            class="form-control "
                          />{" "}
                        </div>
                        <div class="form-group">
                          {" "}
                          <label for="cardNumber">
                            <h6>Card number</h6>
                          </label>
                          <div class="input-group">
                            {" "}
                            <input
                              type="text"
                              name="cardNumber"
                              placeholder="Valid card number"
                              class="form-control "
                              required
                            />
                            <div class="input-group-append">
                              {" "}
                              <span class="input-group-text text-muted">
                                {" "}
                                <i class="fab fa-cc-visa mx-1"></i>{" "}
                                <i class="fab fa-cc-mastercard mx-1"></i>{" "}
                                <i class="fab fa-cc-amex mx-1"></i>{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-8">
                            <div class="form-group">
                              {" "}
                              <label>
                                <span class="hidden-xs">
                                  <h6>Expiration Date</h6>
                                </span>
                              </label>
                              <div class="input-group">
                                {" "}
                                <input
                                  type="number"
                                  placeholder="MM"
                                  name=""
                                  class="form-control"
                                  required
                                />{" "}
                                <input
                                  type="number"
                                  placeholder="YY"
                                  name=""
                                  class="form-control"
                                  required
                                />{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group mb-4">
                              {" "}
                              <label
                                data-toggle="tooltip"
                                title="Three digit CV code on the back of your card"
                              >
                                <h6>
                                  CVV{" "}
                                  <i class="fa fa-question-circle d-inline"></i>
                                </h6>
                              </label>{" "}
                              <input
                                type="text"
                                required
                                class="form-control"
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div class="card-footer">
                          {" "}
                          <button
                            type="button"
                            class="subscribe btn btn-primary btn-block shadow-sm"
                          >
                            {" "}
                            Confirm Payment{" "}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white">
          <div class="container-fluid">
            <Link to="../home" class="nav-link active">
              Home
            </Link>
            {/* <Link to="register" class="nav-link active">Register</Link>
            <Link to="login" class="nav-link active">Login</Link> */}
            <Link to="../payments" class="nav-link">
              Payments
            </Link>
            <Link to="../profile" class="nav-link active">
              Profile
            </Link>
          </div>
        </nav>
    </div>);
  }
};

export default Alumni_payments;

/*
async function (){
      const obj=await axios.get("/login");
      if(obj.loggedIn){
      setLoggedIn(true);
      setUserName(obj.user);
     }
     else setLoggedIn(false);
    }
*/

/*
useEffect( ()=>{
      axios.get("/login").then((res)=>{
        console.log(res);
        if(res.loggedIn){
          setLoggedIn(true);
          setUserName(res.user);
          console.log("HELLO")
        }
        else{setLoggedIn(false);console.log("HI");}
      })
     },[])
    */

/*
if(x=="loggedIn"){
  if(res[x]==false){loggedIn.current=false;break;}
  else loggedIn.current=true;
 }
 else userName.current=res[x];
 */
