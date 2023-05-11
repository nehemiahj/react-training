import { useEffect, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./Card.scss";
const Card = ({ name, city, email, id, onCardClick }) => {
 const [selected,setSelected] = useState(false);


  return (
    <div className="cardStyle" style={{ backgroundColor: !selected ? "#c7fcd6" : "white" }}>
      <img
        alt="robots"
        className="robots"
        src={`https://robohash.org/${id}?10*10`}
      />
      <label className="labelStyle"> Name: {name}</label>
      <label className="labelStyle"> City: {city}</label>
      <label className="labelStyle"> Email: {email}</label>
      <CustomButton name="Click me" onClick={() => {
        onCardClick(name)
      }} />
    </div>
  );
};

export default Card;
