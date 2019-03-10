import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            mood: "",
        }
    }

    componentDidMount() {
        axios.get('https://my-mood-7ee9d.firebaseio.com/mood.json')
            .then(res => {
                this.setState({
                    loading: false,
                    mood: res.data.mood,
                })
            })
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
