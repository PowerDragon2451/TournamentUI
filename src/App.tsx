import { GetInputForm } from './components/GetInputForm';


function App() {
  return (
    <div className="App">
      <h1>Tournament Groups</h1>
      <div className="InputForm">
        <GetInputForm labelProps={{ labelName: "Player Name: " }} inputProps={{ inputType: "text", inputId: "playerInput", onChange: () => { } }} buttonprops={{ buttonLabel: "Submit", onclick: () => { } }} />
        
      </div>

    </div>
  );
}

export default App;
