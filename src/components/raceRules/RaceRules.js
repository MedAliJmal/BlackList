import React, { useEffect } from "react";

const RaceRules = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <h1 className="h1" style={{ marginLeft: "60px" }}>
        Race Rules
      </h1>
      <h3 className="parag">
        TO AVOID GETTING BANNED FROM RACES AL YOU NEED TO DO IS TO RESPECT THIS
        SET OF RULES :
      </h3>
      <ul>
        <li className="parag" style={{ color: "white" }}>
          The PIT (Precision Immobilization Technique)
        </li>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingBottom: "50px",
          }}
        >
          <img
            style={{
              width: "800px",
              height: "400px",
              border: "4px solid white",
              borderRadius: "30px",
            }}
            src="https://cdn.discordapp.com/attachments/874040015779426315/1079376432905605191/maxresdefault.png"
            alt=""
          />
          <p
            className="parag"
            style={{
              fontSize: "30px",
              width: "800px",
              margin: "20px",
              marginRight: "90px",
            }}
          >
            What is a PIT ? Its a technique used by law enforcement personnel to
            force a fleeing vehicle to abruptly turn 180 degrees, causing the
            vehicle to stall and stop. Accidents is for sure a part of a race...
            but this technique is forbidden. Accidents happens but you shouldn't
            pit other racers just to get a better placement any type of cheating
            by hitting other racers cars will result in a race ban, so make sure
            you make a distance between you and other drivers and overtake them
            safely. If you caused an accident you should wait for the driver
            that you have hit and give him back his position .Just make it fair.
          </p>
        </div>
        <li className="parag" style={{ color: "white" }}>
          Snitching
        </li>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingBottom: "50px",
          }}
        >
          <p
            className="parag"
            style={{
              fontSize: "30px",
              width: "800px",
              margin: "20px",
              marginLeft: "90px",
            }}
          >
            You may have problems with other drivers or gangster or who ever it
            is thats normal but don't you ever try to make a trap for someone
            participating in the race like calling the cops or calling other
            gangs or any crew that can interfere in the race this will result a
            race ban and it can even leads to stopping any kind of buisness
            related between the blacklist & your crew.
          </p>
          <img
            style={{
              width: "800px",
              height: "400px",
              border: "4px solid white",
              borderRadius: "30px",
            }}
            src="https://cdn.discordapp.com/attachments/874040015779426315/1079380818000085102/maxresdefault.png"
            alt=""
          />
        </div>
        <li className="parag" style={{ color: "white" }}>
          Toxicity
        </li>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingBottom: "50px",
          }}
        >
          <img
            style={{
              width: "800px",
              height: "400px",
              border: "4px solid white",
              borderRadius: "30px",
            }}
            src="https://cdn.discordapp.com/attachments/874040015779426315/1079382517091680316/maxresdefault.png"
            alt=""
          />
          <p
            className="parag"
            style={{
              fontSize: "30px",
              width: "800px",
              margin: "20px",
              marginLeft: "90px",
            }}
          >
            Any type of toxicity will cause you a race ban and even may get you
            killed... So if you encountered any problem during the race with
            other drivers keep the rage to your self. No radio Spamming is
            allowed, no trash talk, you have the right to tell the race hoster
            your problems after the race is completed. By having a proof you may
            get a refund and get the other drivers banned from the races. So
            keep the radio clean.
          </p>
        </div>
        <li className="parag" style={{ color: "white" }}>
          Car Class & Upgrades
        </li>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingBottom: "50px",
          }}
        >
          <p
            className="parag"
            style={{
              fontSize: "30px",
              width: "800px",
              margin: "20px",
              marginLeft: "90px",
            }}
          >
            The race hoster have the right to check your car upgrades, so when
            you are asked about it say the truth... All you need to do is tell
            him what are the parts installed in your car
            (NOS,Turbo,Engine,Transmission...). If you get cought lying about
            your car category or upgrade this will result in a race ban.
          </p>
          <img
            style={{
              width: "800px",
              height: "400px",
              border: "4px solid white",
              borderRadius: "30px",
            }}
            src="https://cdn.discordapp.com/attachments/874040015779426315/1079383919453032488/main_52.png"
            alt=""
          />
        </div>
      </ul>
    </div>
  );
};

export default RaceRules;
