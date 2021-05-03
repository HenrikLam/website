import './App.css';
import Page from './Page.js';
import Tab from './Tab.js';
var tabs = [<Tab>Hi</Tab>];
var text = ["WOw!"];
function App() {
  return (
    <div className="App">
      <Page tabsArr = {tabs} textArr = {text}></Page>
    </div>
  );
}

export default App;
