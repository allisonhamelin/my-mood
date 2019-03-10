import React, {Component} from 'react';
// import axios from 'axios';
import firebase from './firebase';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mood: "",
        }
    }

    componentDidMount() {
        var starCountRef = firebase.ref('/mood');
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            this.setState({
                mood: data.mood,
            })
        });
    }

    render() {
        return (
            <div className="App">
                <h1 className="mood">I'm feeling... {this.state.mood}</h1>
            </div>
        );
    }
}

export default App;
