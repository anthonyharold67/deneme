import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Main from "./component/Main";
import PrivateRouter from "./PrivateRouter";


const AppRouter = ({setMyData,myData,userInfo,setUserInfo}) => {

    

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login setUserInfo={setUserInfo} />} />
        <Route path="/main" element={<PrivateRouter userInfo={userInfo} myData={myData} setMyData={setMyData}/>} >
          <Route path="" element={<Main myData={myData} setMyData={setMyData} />}/>
        </Route>
     </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;