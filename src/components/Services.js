import React, {Component} from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaUserAlt } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component{
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: " Cocktails",
        info:
         "many different kind of cocktails with unique amazing taste which you wont regret."
      },
      {
       icon: <FaShuttleVan />,
       title: "Free Shuttle",
       info:
         "With aloot more of interesting places to visit different national parks."
     },
     {
       icon: <FaHiking />,
       title: "Endless Hiking",
       info:
         "who doesnt love hiking,well get to see different kind of mountains and hills thats what we call Unforgetable Tanzania."
     },
     {
      icon: <FaUserAlt />,
      title: "Good customer care",
      info:
        "you will get good service from good people ."
    },


    ]
    }

  render(){
    return(
      <section className="services">
         <Title title="services" />
         <div className="services-center">
         {this.state.services.map((item,index) => {
           return <article key={index} className="service">
           <span>{item.icon}</span>
           <h6>{item.title}</h6>
               <p>{item.info}</p>
           </article>
         })}
            
      </div>
      </section>
    );
  }
}
