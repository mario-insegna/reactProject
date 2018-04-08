import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message'; 

class App extends Component {
    _onChange = (value) => {
        console.log(value);
        this.props.dispatch(setMessage(value))
    }

    render () {
        const {message} = this.props.messageReducer;
        return (
            <div>
                <p>This is my new react app from:</p>
                <a target="_blank" href="https://codeburst.io/setting-up-a-react-project-from-scratch-d62f38ab6d97">https://codeburst.io/setting-up-a-react-project-from-scratch-d62f38ab6d97</a>
                <hr/>
                <InputPreview value={message} onChange={this._onChange}/>
            </div>
        );
    }
}

export default connect(state => state)(App);