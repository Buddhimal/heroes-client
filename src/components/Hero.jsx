import React, {Component} from "react";

class Hero extends Component {
    state = {heroId: 1, name: "hello", movies: ['Movie 1', 'Movie 2', "Movie 3"], likeCount: this.props.likeCount};

    render() {
        // return <h1> Avengers incoming</h1>
        // return <React.Fragment>
        //     <div className="col-md-12">
        //         <h1 style={{color: "red", fontSize: "90px"}}> Avengers incoming</h1>
        //         <button type="button" className="btn btn-primary">Avenger {this.state.heroId}</button>
        //         {/*<button>Click me...{this.state.heroId}</button>*/}
        //         <h2>{this.isHero()}</h2>
        //     </div>
        // </React.Fragment>

        return <React.Fragment>
            <br/>
            <div className="col-md-12 card" style={{width: "18rem"}}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3_oFPKPXfdRgrDVtUlYYANMGFvznBYBNo3A&usqp=CAU"
                    className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Avengers <span
                        className="badge badge-secondary"> {this.state.likeCount} Likes </span></h5>
                    <p className="card-text">This is a simple API about Avengers</p>
                    {/*<ul>*/}
                    {/*    {this.state.movies.map(name => (*/}
                    {/*        <li>*/}
                    {/*            {name}*/}
                    {/*        </li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}
                    <ul>{this.showMovies()}</ul>
                    <button className="btn btn-primary" onClick={() => this.likeAvenger(1)}>
                        <i className="fa fa-thumbs-up"></i> Like
                    </button>
                </div>
            </div>
        </React.Fragment>
    }

    isHero() {
        // if (this.state.heroId < 0) return "Not an Avenger";
        // else return "Is an Avenger";

        return this.state.movies < 0 ? "Not an Avenger" : "Is an Avenger";
    }

    showMovies() {
        return this.state.movies.length === 0 ? <p> No Movies Available </p> : this.state.movies.map(movie =>
            <li key={this.state.movies.indexOf(movie)}>{movie}</li>);
    }

    likeAvenger = (count) => {
        this.setState({likeCount: this.state.likeCount + count});
    }

}

export default Hero;