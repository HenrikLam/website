import './App.css';
import Page from './Page.js';
import Tab from './Tab.js';
var tabs = ['About Me','Hi2'];
var text = ["", 'Yeeeeeeeet!'];
function App() {
  return (
    <div className="App">
      <Page tabsArr = {tabs} textArr = {text}></Page>
    </div>
  );
}

export default App;
