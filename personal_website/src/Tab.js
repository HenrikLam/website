import React from 'react';
import ReactDOM from 'react-dom';

class Tab extends React.Component{
    constructor(props){
        super(props);
        this.state = {active:false};
    }
    render(){
        return(
            <div>{this.props.children}</div>
        );
    }
}
ReactDOM.render(<Tab/>,document.getElementById('root'));

export default Tab;