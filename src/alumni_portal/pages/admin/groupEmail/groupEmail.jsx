/* Page is used to send Emails to all the alumni */


import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const GroupEmail = () => {

  const [msg, setMsg] = useState('');
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(false);


  useEffect(() => {
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
      });
  }, []);


  const onSubmit = async (e) => {
    console.log("email");
    const user = {
      to: to,
      subject: subject,
      description: description
    };
    await axios.post("/groupEmail", user)
      .then(response => setMsg(response.data.respMesg))
      .catch(err => console.log(err));
  };
  if (login) {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-white">
          <div class="container-fluid">

            <Link to="../home" class="nav-link active">Home</Link>
            <Link to="../alumni" class="nav-link active">Alumni</Link>
            <Link to="../email" class="nav-link active">E-mail</Link>
            <Link to="" class="nav-link">Logout</Link>
          </div>
        </nav>
        <div className="container">
          <div className="row bg-light">

            <div className="mx-auto shadow p-5 ">
              <h4 className="text-center mb-2">Send E Mail </h4>
              <p class="mb-3 mt-2" style={{ color: "green", marginLeft: "57px" }}><b>{msg}</b></p>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="To"
                  name="to"
                  onChange={(e) => { setTo(e.target.value); }}
                />
              </div>
              <div className="form-group  mb-6 ">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Subject"
                  name="subject"
                  onChange={(e) => { setSubject(e.target.value); }}
                  value={subject}
                />
              </div>
              <div className="form-group  mb-6">
                <textarea rows="10" cols="300" font-size="10px"
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Description"
                  name="description"
                  onChange={(e) => { setDescription(e.target.value); }}
                  value={description}
                />
              </div>
              <div className="d-flex align-items-center form-group  mb-6 ">
                <button onClick={onSubmit} className="btn btn-primary btn-block " style={{ marginLeft: "100px" }}>Send Mail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default GroupEmail;