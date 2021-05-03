import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './Tab.js'
const reactDom = require("react-dom");

class Page extends React.Component{
    constructor(props){
        super(props);
        this.tabs = props.tabsArr;
        this.text = props.textArr;
        this.active = 0;
    }
    render(){
        var ret = [];
        var i = 0;
        ret.push(<div style={{float:'left', height:'100vh', width:'30vw', backgroundColor:'#1a1a1a', padding:'1vw'}}>{this.tabs.map((text) => <Tab key={i++}>{text}</Tab>)}
            </div>);
        ret.push(<div>{this.text[this.active]}</div>);
        return ret;
    }
}

export default Page;