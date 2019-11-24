import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card remove" onClick={() => props.selectedCharacter(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>

      <div className="content">

            <strong>{props.name}</strong> 
            <br/>
            <span >
      </span>
      </div>
      
    </div>
  );
}

export default FriendCard;
