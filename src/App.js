import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const sendRequest = async () => {
    const response = axios.get("http://localhost:8082/test");
    if(response){
      console.log(response);
      setData(response.data);
    }
  }
  return (
    <div className="App">
      <h1>Testing aws MERN connectivity</h1>
      <button onClick={()=> sendRequest()}>send</button>
      {data && data.response.map((ele)=>{
        return <p>{ele.name}</p>
      })}
    </div>
  );
}

export default App;
