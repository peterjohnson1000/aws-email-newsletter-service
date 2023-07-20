import { React, useState } from "react";
import "./index.css";
import peterin from "./Assets/peterin-logo.jpg"
function App() {

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(true);
  console.log(email);
  console.log(process.env.REACT_APP_API_KEY);

  const subscribeEmail = async (event) => {
    event.preventDefault();
    const url = '';
  
    const requestOptions = {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    };
  
    // fetch(url, requestOptions);
    
    const response = await fetch(url, requestOptions);
    console.log(response);
    if (response.ok == false) {
      console.log(response.ok);
      setSubscribed(false);
      console.log("Subscribed!");
    }
  
  };
  
  return (
    <div className="bg-black">
      <div className="h-screen flex justify-center items-center flex-col">
        <p className="font-light text-5xl text-white z-10">Be In Charge of Your <span className="font-extrabold text-6xl text-[#3e9c35]">Money </span>!</p>
        <p className="text-white mt-[-10px] pl-96">By subscribing to our Newsletter</p>
        <div className="my-10 flex">
          {subscribed ? 
            <form className="bg-white rounded-md">
              <input className="p-3 mr-5 rounded-md" type="email" placeholder="example@mail.com" onChange={(e) => setEmail(e.target.value)}/>
              <button className="text-white bg-[#3e9c35] py-2 px-3 mr-1 rounded-md" onClick={subscribeEmail}>Subscribe</button>
            </form> : 
            <div>
              <p className="text-white">💌 Please check your mail to confirm the subscription.</p>
            </div> }
          
        </div>
        <div className="text-white flex items-center">
          <p>A</p>
          <img className="h-20" src={peterin} />
          <p>Venture.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
