import data from "./helper/data"
import { useState } from 'react';
import AppRouter from './Router';

function App() {
  const [myData,setMyData] = useState(data);
  const [userInfo,setUserInfo] = useState("")
  return (
    <div className='app'>
      <AppRouter userInfo={userInfo} setUserInfo={setUserInfo} myData={myData} setMyData={setMyData} />
    </div>
  );
}

export default App;
