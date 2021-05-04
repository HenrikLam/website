import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class Tab extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {active:false};
        this.handleClick = this.handleClick.bind(this);
        this.styles = {
            fontSize: '30px',
            color: '#bfbfbf'
        };
    }
    revertToDefault(){
        this.state = {active:false};
        this.styles = {
            fontSize: '30px',
            color: '#bfbfbf'
        };
    }
    handleClick(){
        this.state = {active:true};
        this.styles = {
            fontSize: '35px'
        };
        this.props.onClick(this.props.id);
    }
    render(){
        return(
            <div onClick = {this.handleClick} style = {this.styles}>{this.props.children}</div>
        );
    }
}
ReactDOM.render(<Tab/>,document.getElementById('root'));

export default Tab;