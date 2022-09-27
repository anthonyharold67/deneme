import {Outlet, Navigate } from "react-router-dom";


const PrivateRouter = ({userInfo,myData,setMyData}) => {
    console.log(userInfo)
    return userInfo ? <Outlet /> : <Navigate to="/"/>
}

export default PrivateRouter