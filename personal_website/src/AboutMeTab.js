import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './Tab.js'
class AboutMeTab extends Tab{
    constructor(props){
        super(props);
        
    }
    
    render(){
        return <Tab onClick={this.handleClick}>About Me</Tab>
    }
}

ReactDOM.render(<AboutMeTab/>, document.getElementById('root'));
export default AboutMeTab;