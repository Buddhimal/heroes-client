import React, {Component} from "react";

class HeroDetails extends Component {


    render() {

        return <div>
            <br/>
            <div className="col-md-12 card">
                <h1>Hero Details {this.props.match.params.id}</h1>

            </div>
            <button onClick={this.goHome} className="btn btn-sm btn-primary">Home </button>
        </div>
    }

    goHome = ()=>{
        this.props.history.push("/")
    };


}

export default HeroDetails;