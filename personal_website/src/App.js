import './App.css';
import Page from './Page.js';
import Tab from './Tab.js';
var tabs = ['Hi','Hi2'];
var text = ["WOw!", 'Yeeeeeeeet!'];
function App() {
  return (
    <div className="App">
      <Page tabsArr = {tabs} textArr = {text}></Page>
    </div>
  );
}

export default App;
