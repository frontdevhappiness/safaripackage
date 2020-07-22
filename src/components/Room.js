import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Room({room}){
 const { name, cool, images, price } = room;
  //console.log(room);

  return(
     <article className="room">
   <div className="img-container">
    <img src={images[0] || defaultImg} alt="single room" />
    <div className="price-top">
         <h6>${price}</h6>
         <p>per night</p>
       </div>
        <Link to={`/rooms/${cool}`} className="btn-primary room-link">
        features
      </Link>
    </div>
    <p className="room-info">{name}</p>
    </article>
  );
}
Room.propTypes = {
   room: PropTypes.shape({
     name: PropTypes.string.isRequired,
   cool: PropTypes.string.isRequired,
   images: PropTypes.arrayOf(PropTypes.string).isRequired,
   price: PropTypes.number.isRequired
 })
}
