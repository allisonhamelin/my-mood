import React, {Component} from 'react';

class Mood extends Component {

    constructor(props) {
        super(props);
        console.log("constructor", this.props)
        // this.updateMood = this.updateMood.bind(this);
        this.state ={
            mood: "",

        }
    }


    // updateMood() {
    //     this.setState();
    // }

    componentDidMount() {
        // this.updateMood();
    }

    componentDidUpdate(prevProps) {
        // if(!prevProps.mood) {
        //     this.setState({
        //         mood: this.props.mood
        //     });
        // }
        this.forceUpdate();
    }

    render() {
        return <p>I'm feeling... {this.props.mood}</p>
    }
}

export default Mood;