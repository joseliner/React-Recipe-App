import React,{useEffect, useState} from "react";
import './App.css';

const App = () => {
  const APP_ID = "b7d613fc";
  const APP_KEY = "ed856da4e53489cbcaab4eacf4aaf963";
  
  const exampleReq = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    console.log("Effect has been run");
  }, []);
  
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default App;
