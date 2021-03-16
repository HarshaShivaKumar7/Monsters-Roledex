import React from "react";
import Card from "../Card/Card.component";
import "./CardList.style.css";

const CardList = (props) => {
    return (
        <div className="card-list">
            {props.cars.map((cars) => (
                <Card key={cars.id} cars={cars} />
            ))}
        </div>
    );
};

export default CardList;
