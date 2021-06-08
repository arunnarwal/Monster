import React from 'react'
export default class Home extends React.Component{
    constructor()
    {
        super();
        console.log('constructor execute');
    }
    componentDidMount()
    {
        console.log('compnent did mount execute');
    }
    render(){
        return(
            <div>Hello Hole Div</div>
        )
    }
}