import React from "react";
import "./Card.style.css";

const Card = (props) => {
    return (
        <div className="card-container">
            <img
                src={`https://robohash.org/${props.cars.id}?set=set2&size=180x180`}
                alt="Unique Images"
            />
            <h1>{props.cars.name}</h1>
            <p>{props.cars.email}</p>
        </div>
    );
};

export default Card;
