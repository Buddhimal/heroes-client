import React, {Component} from "react";
import Hero from "./Hero";

class Heros extends Component {
    state = {
        allAvengers: [
            {id: 1, likeCount: 5},
            {id: 2, likeCount: 15},
            {id: 3, likeCount: 25}
        ]
    }

    render() {
        return (
            <div className="container">
                <div className="row col-md-12">
                    <div className="row">
                        {this.state.allAvengers.map((avenger) => (
                            <div className="col" key={avenger.id}>
                                <Hero key={avenger.id} likeCount={avenger.likeCount}/>
                            </div>
                        ))}
                    </div>


                    {/*<div className="col-md-4">*/}
                    {/*    <Hero/>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-4">*/}
                    {/*    <Hero/>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-4">*/}
                    {/*    <Hero/>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default Heros;