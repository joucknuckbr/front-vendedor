import React from 'react';

export default class App extends React.Component {
    render(){
        return (
            <p>{ this.props.text }</p>
        );
    }
}