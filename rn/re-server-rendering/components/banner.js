import React, { Component } from 'react'

class banner extends Component {
    constructor(props){
        super(props);
    }
    
    
    
    render() {
        return (      
                <React.Fragment >
                    <h1>test</h1>
                    {this.props.Children}
                    <h1>test</h1>
                    </React.Fragment>
            
        )
    }
}
export default index;