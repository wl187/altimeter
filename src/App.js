import react from "react";
import './App.css';
import {Adjuster} from "./Adjuster.js"

function App() {
	
	
	
  return (
    
     <div className="App">
       <Adjuster arrowValueInitial={0} bugValueInitial={0} maxValue={1500} minValue={0} />
		
     </div>
	
  );
}


export default App;
