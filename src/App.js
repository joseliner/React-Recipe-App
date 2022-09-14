import './App.css';

const App = () => {
  const APP_ID = 'b7d613fc';
  const APP_KEY = 'ed856da4e53489cbcaab4eacf4aaf963';
  
  const exampleReq = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=b7d613fc&app_key=ed856da4e53489cbcaab4eacf4aaf963"
  return(
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
