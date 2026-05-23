import { GetInputForm } from './components/GetInputForm';
import { ShowPlayerList } from './components/ShowPlayerList';


function App() {
  return (
    <div className="App">
      <h1>Tournament Groups</h1>
      <div className="InputForm">
        <GetInputForm labelProps={{ labelName: "Player Name: " }} inputProps={{ inputType: "text", inputId: "playerInput", onChange: () => { } }} buttonprops={{ buttonLabel: "Submit", onclick: () => { } }} />
      </div>
      <ShowPlayerList></ShowPlayerList>
      
    </div>
  );
}

export default App;
