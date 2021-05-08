import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';


class Tab extends React.Component{
    constructor(props){
        super(props);
        this.state = {active:false};
        this.handleClick = this.handleClick.bind(this);
        this.revertToDefault.bind(this);
        this.styles = {
            fontSize: '30px',
            color: '#ffffff'
        };
    }
    revertToDefault(){
        this.state = {active:false};
        this.styles = {
            fontSize: '30px',
            color: '#ffffff'
        };
    }
    setActive(){
        this.state = {active:true};
        this.styles = {
            fontSize: '40px',
            backgroundColor: "rgb(61, 63, 66)",
            color: '#bfbfbf'
        };
    }
    handleClick(){
        this.setActive();
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