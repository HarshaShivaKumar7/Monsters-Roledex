import React, { Component } from "react";
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            cars: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ cars: users }));
    }

    render() {
        const { cars, searchField } = this.state;
        const filterdNames = cars.filter((car) =>
            car.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1 className="head">Monster Roledex</h1>
                <SearchBox
                    placeholder="Search Users"
                    handleChange={(e) =>
                        this.setState({ searchField: e.target.value })
                    }
                />
                <CardList cars={filterdNames} />
            </div>
        );
    }
}

export default App;
