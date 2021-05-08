import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './Tab.js'
const reactDom = require("react-dom");

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {page: 0}
        //this.tabs = props.tabsArr.map((text,index) => <Tab key={index} id={index} onClick={this.tabOnclick.bind(this)}>{text}</Tab>);
        this.tabs = []
        this.text = props.textArr;
        this.tabs = this.props.tabsArr.map((text,index) => new Tab({key:index,id:index, onClick:this.tabOnclick.bind(this), children:text}));
        this.componentDidMount.bind(this)
        console.log(this.tabs);
    }
    componentDidMount(){
        console.log('lumao');
        //this.tabs = this.props.tabsArr.map((text,index) => new Tab({key:index,id:index, onClick:this.tabOnclick.bind(this), children:text}));
        console.log(this.tabs);
    }
    tabOnclick(i){
        this.setState({page: i});
        console.log("tab " + i + " was clicked");
        for (var j = 0; j < this.tabs.length; j++){
            if (i != j){
                this.tabs[j].revertToDefault();
            }
        }
        this.forceUpdate();
    }
    render(){
            return <div>
                <div style={{float:'left', height:'100vh', width:'20vw', backgroundColor:'#333333'}}>{this.tabs.map((t) => t.render())}</div>
                <div key="text" id="text">{this.text[this.state.page]}</div>
            </div>;
    }
}

export default Page;