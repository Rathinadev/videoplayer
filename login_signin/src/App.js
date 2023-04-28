import {useState} from "react"; 
import "./styles.css";




export default function App(){
  const[login,setlogin]= useState(true);
  const[pass,setpass]=useState("");
  const[conformpass,setconformpass]=useState("");

  const handlepasswordchange=(event)=>{
    setpass(event.target.value);
  };

  const handleconformpasswordchange=(event)=>{
    setconformpass(event.target.value);
  };

  const handleclick=()=>{!login?(pass!==conformpass?alert("Passwords do not Match!"):setlogin(!login)):setlogin(!login);
  }
  
  return(
    <main>
    <p className="Title">
        Project:2  SignIn & Login Page
    </p>
    {login?(
    <div className="mainbox">
      <p className="heading">
        {login?'Login':'SignIn'}
      </p>
      <div className="account">
        <p classname="accounttext">
          Account Name
        </p>
        <input className="inputtype"></input>
      </div>
      <div className="email">
      <p className="emailtext">
        Email ID
      </p>
      <input className="inputtype" type="text"></input>
      </div>
      <div className="password">
        <p className="passwordtext">
          Password
          </p>
          <input className="inputtype" type="text"></input>
      </div>
      <button className="loginbutton" onClick={handleclick}>{login?'SignIn':'LogIn'}</button>
      </div> ):
      (<div className="signinbox">
      <p className="heading">
        {login?'Login':'SignIn'}
      </p>
      <div className="name">
        <p className="nametext">
          Name
        </p>
        <input className="inputtype"/>
      <div >
      <p className="emailtext">
        Email ID
      </p>
      <input className="inputtype" type="text"/>
      </div>
      <div >
      <p className="emailtext"  >
        PassWord
      </p>
      <input className="inputtype" type="text" onChange={handlepasswordchange}/>
      <div >
      <p className="emailtext">
        Conform Password:
      </p>
      <input className="inputtype" type="text" onChange={handleconformpasswordchange}/>
      </div>
      </div>
      
      </div>
     
      <button className="loginbutton" onClick={handleclick}>{login?'SignIn':'LogIn'}</button>
      </div>)} 
    </main>
  )
}