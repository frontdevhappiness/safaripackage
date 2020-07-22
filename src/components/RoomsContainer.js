
import React from "react";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

function RoomContainer({ Context }) {
  const { loading, sortedRooms, rooms } = Context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);
























//import React from "react";
//import RoomsFilter from "./RoomsFilter";
//import RoomsList from "./RoomsList";
//import { withRoomConsumer } from "../context";
//import Loading from "./Loading";

//export default function RoomsContainer(){
//  return(
  //  <RoomConsumer>
  // {value => {
  //   const { loading, setRoom, sortedRooms,rooms } = value;
  //   if (loading) {
    //    return <Loading />;
    //  }
     //return(
  //  <div> hello from rc
  //  <RoomsFilter rooms={rooms} />
  //  <RoomsList rooms={sortedRooms} />
    //</div>
//  );
//}}
//</RoomConsumer>
//);
//}
