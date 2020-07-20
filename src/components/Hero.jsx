import React, {Component} from "react";

class Hero extends Component {
    state = {id:1,name:"hello"};

    render() {
        // return <h1> Avengers incoming</h1>
        return <React.Fragment><h1> Avengers incoming</h1>
            <button>Click me...{this.state.id}</button>
        </React.Fragment>
    }

}

export default Hero;