import React, {Component} from "react";
import axios from "axios";
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
                            <div className="col-md-6" key={avenger.id}>
                                <Hero key={avenger.id} avenger={avenger}
                                onDelete={()=> this.deleteAvenger(avenger.id)}
                                />
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

    async deleteAvenger(heroId) {
        // let newAvengers=this.state.allAvengers.filter(
        //     (avenger)
        // )
       await axios.delete(`http://localhost:5000/api/heroes/${heroId}`)
    }

    async likeAvenger(avenger){
        await axios.put(`http://localhost:5000/api/heroes/${avenger.id}`,{
            likeCount:avenger.likeCount+1
        })
    }

    async componentDidMount() {
        let {data} = await axios.get("http://localhost:5000/api/heroes");
        console.log(data);

        let avengers= data.map((avenger) => {
            return {
                id: avenger._id,
                name: avenger.name,
                likeCount:avenger.likeCount
            };
        });

        this.setState({allAvengers: avengers});
    }



}


export default Heros;