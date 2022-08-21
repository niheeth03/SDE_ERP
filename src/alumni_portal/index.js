import { BrowserRouter as Router, Routes, Route,Link,Outlet } from "react-router-dom";


const Alumni_portal=()=>{
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="payments">Payments</Link>
            </nav>
            <Outlet/>
        </div>
    );
}

export default Alumni_portal;