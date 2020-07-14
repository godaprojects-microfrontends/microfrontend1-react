import React from 'react';

class Microfrontend1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.data
    }
    render() {
        if(this.state){
            return (<h4>This is the body of Microfrontend1 (Data from parent : <i>{this.state.data}</i>)</h4>)
        } else {
            return(<div>loading... </div>)
        }
        
    }
}



export default Microfrontend1