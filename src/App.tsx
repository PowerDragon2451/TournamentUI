import { GetInputForm } from './components/addPlayerForm';


function App() {
  return (
    <div className="App">
      <h1>Tournament Groups</h1>
      <GetInputForm labelProps={{ labelName: "Add Players" }} inputProps={{ inputType: "text", inputId: "playerInput", onChange: () => { } }} buttonprops={{ buttonLabel: "Submit", onclick: () => { } }} />
    </div>
  );
}

export default App;
