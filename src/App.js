import './App.css';
import { useState } from "react";
import {OneTimePad,GenerateRandomKey} from './OneTimePad';

function App() {

const [plaintext, setPlaintext] = useState("");
const [Key, setKey] = useState("");
const isRandom =()=>{
    setKey(GenerateRandomKey(plaintext))
}
function handleSubmit(event) {
  event.preventDefault();
}
  return (
    <div className='container'>
      <div className="login-box">
        <h2>One Time Pad</h2>
        <form onSubmit={event => {handleSubmit(event)}}>
          <div className="user-box">
            <textarea
              value={plaintext}
              onChange={(e) => setPlaintext(e.target.value)}
              required="" />
            <label>Text</label>
          </div>
          <div className="user-box">
            <textarea
              value={Key}
              type="number"
              onChange={(e) => setKey(e.target.value)}
              required="" />
            <label>Key</label>
          </div>
          <div className='buttonContainer'>
            <button onClick={() => {OneTimePad(plaintext,Key,"Encode")}}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Encryption
            </button>
            <button onClick={() => {OneTimePad(plaintext,Key,"Decode")}}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Decryption
            </button>
            <button onClick={() => {isRandom()}}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Random Key
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
