import { AddPlayerForm } from './components/addPlayerForm';
import { addPlayer, addNewPlayer } from './api/players';

function App() {
  return (
    <div className="App">
        <h1>Tournament Groups</h1>
        <AddPlayerForm   labelProps={{labelName:"Add Players"}} inputProps={{inputType:"text",inputId:"playerInput", onChange:()=>{}}} buttonprops={{buttonLabel:"Submit",onclick:()=>{}}}/>    
    </div>
  );
}

export default App;
