import React, {Component} from 'react';
import firebase from './firebase';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mood: "",
            prevMood: "",
            currMoodGood: 1,
            prevMoodGood: 0,
            goodColor: "#F8EB33",
            badColor: "#95D3EA",
        };
    }

    componentDidMount() {
        const mood = firebase.ref('/mood');
        mood.on('value', (snapshot) => {
            const moodData = snapshot.val();

            const prevMood = firebase.ref('/prevMood');
            prevMood.on('value', (snapshot) => {
                const prevMoodData = snapshot.val();

                this.setState({
                    mood: moodData.mood,
                    prevMood: prevMoodData.mood,
                    currMoodGood: moodData.good,
                    prevMoodGood: prevMoodData.good,
                }, () => {
                })
            });
        });
    }

    setBackground() {
        const {
            currMoodGood,
            prevMoodGood,
            goodColor,
            badColor,
        } = this.state;

        const prevColor = prevMoodGood ? goodColor : badColor;
        const currColor = currMoodGood ? goodColor : badColor;

        document.getElementsByTagName("BODY")[0]
            .style.background = `linear-gradient(to right, ${prevColor}, ${currColor})`;
    }

    render() {
        this.setBackground();
        return (
            <div className="App">
                <div className="mood">
                    <h1>I'm feeling... {this.state.mood}</h1>
                </div>
            </div>
        );
    }
}

export default App;
