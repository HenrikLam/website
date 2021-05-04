import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './Tab.js'
const reactDom = require("react-dom");

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {page: 0}
        this.tabs = props.tabsArr.map((text,index) => <Tab key={index} id={index} onClick={this.tabOnclick.bind(this)}>{text}</Tab>);
        this.text = props.textArr;
    }
    tabOnclick(i){
        this.setState({page: i});
        console.log("tab " + i + " was clicked");
    }
    render(){
        return <div>
                <div style={{float:'left', height:'100vh', width:'30vw', backgroundColor:'#1a1a1a', padding:'1vw'}}>{this.tabs}</div>
                <div key="text" id="text">{this.text[this.state.page]}</div>
            </div>;
    }
}

export default Page;