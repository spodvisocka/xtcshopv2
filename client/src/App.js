import React, { useState, useEffect } from "react";
import "./App.css";

//useState creates a stable variable (message) and useEffect calls the API 

const root = createRoot(document.getElementById("surveyElement"));
root.render(
    <SurveyComponent />
);

function App() {
  const [message, setMessage] = useState("aa");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message)); 
  // }, []);

  // this is a hook! ^^ we're calling the API using fetch() and setting two responses in a promise: response grabs res.json in the server and grabs the message data to display
  //the second argument is an empty array- this makes sure the hook is only called once when the component mounts (activates?)

  return(
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App