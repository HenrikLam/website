import React from 'react';
import ReactDOM from 'react-dom';

class PictureLink extends React.Component{
    constructor(props){
        super(props);
        this.state = {hovered:false};
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }
    render(){
        return(
            <img className= "PictureLink" src = {this.props.src} onClick = {this.jumpToLink} onMouseEnter = {this.onMouseEnterHandler} onMouseLeave= {this.onMouseLeaveHandler} style={{opacity:this.state.hovered ? 1:0.7}}/>
        );
    }
    jumpToLink(){
        console.log("pow!");
    }
    onMouseEnterHandler(){
        this.setState({
            hovered:true
        })
    }
    onMouseLeaveHandler(){
        this.setState({
            hovered:false
        })
    }
}

ReactDOM.render(
    <PictureLink />,
    document.getElementById('root')
);

export default PictureLink;