import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "axios";

const TinderCards = () => {
  const [people, setpeople] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      const req = await axios.get("http://localhost:8001/tinder/cards");
      console.log(req);
      setpeople(req.data);
    };
    fetchdata();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log(`removing:${nameToDelete}`);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen!`);
  };
  console.log(people);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people &&
          people.map((person) => {
            return (
              <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                onCardRightScreen={() => outOfFrame(person.name)}
              >
                <div
                  className="card"
                  style={{ backgroundImage: `url(${person.imgUrl})` }}
                >
                  <h3>{person.name}</h3>
                </div>
              </TinderCard>
            );
          })}
      </div>
    </div>
  );
};

export default TinderCards;
