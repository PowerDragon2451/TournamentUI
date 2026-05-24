import { GetInputForm } from './components/GetInputForm';
import { ShowPlayerList } from './components/ShowPlayerList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tournament Groups</h1>
      <div className="Layout">
        <div className="leftSideBar">
          
        </div>
        <div className="mainBody">
          <div className="InputForm">
            <GetInputForm labelProps={{ labelName: "Player Name: " }} inputProps={{ inputType: "text", inputId: "playerInput", onChange: () => { } }} buttonprops={{ buttonLabel: "Submit", onclick: () => { } }} />
          </div>
          <ShowPlayerList></ShowPlayerList>
        </div>
        <div className="rightSideBar"></div>
      </div>
    </div>  
  );
}

export default App;
