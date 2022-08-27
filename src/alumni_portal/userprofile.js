import {useState,useEffect} from "react"

const Userprofile=(
    function(){
    const [userId,setUserId]=useState("");
    const [loggedIn,setLoggedIn]=useState(false);
    const getUser=()=>{
        return userId;
    }
    const setUser=(user)=>{
        setUserId(user);
        setLoggedIn(true);
        console.log("hello");
    }
    const removeUser=()=>{
        setUserId("");
        setLoggedIn(false);
    }
     return {
    getUser: getUser,
    setUser: setUser
  }
})();
    
export default Userprofile;