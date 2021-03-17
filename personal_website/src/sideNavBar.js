import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './Tab.js';

const reactDom = require("react-dom");

const styleTab = {color: 'white'};

class SideNavBar extends React.Component{
    constructor(props){
        super(props);
        this.tabs = [];
        this.tabs.push(<div style ={{marginTop: '5vh', marginBottom: '5vh', fontSize: '4vw'}}>Henrik Lam</div>)
        this.tabs.push(<Tab style={{color: 'white'}}>About Me</Tab>);
    }
    render(){
        return(
            <div style={{float: 'left', width:'25vw', minHeight:'100vh', position:'fixed', padding:'1vh', fontSize:'large',backgroundColor:'black',color:'#808388',textAlign:'center',paddingTop:'2vh',fontSize:'30px',font:'Helvatica'}}>
                {this.tabs}
            </div>
        );
    }
}

reactDom.render(
    <SideNavBar/>,
    document.getElementById('root')
)

export default SideNavBar;