import {

  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import axios from "axios";
//import Userprofile from "../../userprofile";
import {useState,useEffect,useRef} from "react";





const Alumni_payments=()=>{
    const userName=useRef("");
    const loggedIn=useRef(false);
    axios.defaults.withCredentials=true;
    


useEffect(()=>{
  console.log("In use effect")
 axios.get("../../login").then(
  (res)=>{
    console.log("RESPONSE"+res)
 for(let x in res){
   if(x=="data"){console.log("DATA"+res[x]);
   console.log(JSON.stringify(res[x]));

   for(let y in res[x]){if(y=="user")userName.current=res[x][y];else loggedIn.current=res[x][y];};
  }
   
   
   
 }
 }).catch(console.log("errorrrr"));},[])
console.log("Calling from alumni_payments");
console.log(userName);
if(loggedIn.current){return <>{userName.current}</> } 
  else{return <>Welcome to payments page</>}
 

    
    
}

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