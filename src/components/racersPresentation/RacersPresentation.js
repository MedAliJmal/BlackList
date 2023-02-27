import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";

const racersCars = [
  {
    id: Math.random(),
    carImg:
      "https://gta5mod.net/wp-content/uploads/2022/04/Nissan-Skyline-GT-R-R323.webp",
    carName: "Nissan Skyline GT-R(BNR32)",
    owner: "Chawa",
  },
  {
    id: Math.random(),
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079028005495652372/supra.png",
    carName: "Toyota Supra MKIV",
    owner: "Ico San",
  },
  {
    id: Math.random(),
    carImg:
      "https://img.gta5-mods.com/q95/images/mitsubishi-evolution-ix-voltex-add-on-fivem-extras-template/2f1ea1-Voltex.png",
    carName: "Mitsubishi Lancer Evolution IX Voltex",
    owner: "Ico & Chawa",
  },
  {
    id: Math.random(),
    carImg:
      "https://www.gtav.hachiraito.com/wp-content/uploads/2021/10/r33hr-cover-scaled.jpg",
    carName: "1995 Nissan Skyline GT-R R33 V-Spec",
    owner: "Antonio",
  },
  {
    id: Math.random(),
    carImg:
      "https://img.gta5-mods.com/q95/images/nissan-skyline/902d76-UrasR34Silver1-min.png",
    carName: "Nissan Skyline GT-R (BNR34) 2002",
    owner: "Isaac DIP",
  },
  {
    id: Math.random(),
    carImg:
      "https://img.gta5-mods.com/q95/images/2002-mazda-rx-7-spirit-r-type-a-series-iii-fd3s/c7f8dd-20190502014510_1.jpg",
    carName: "Mazda RX7 Spirit R (FD3S)",
    owner: "Ray",
  },
];

const members = [
  {
    id: Math.random(),
    name: "CHAWA",
    imgUrl:
      "https://torange.biz/photofxnew/21/HD/image-profile-picture-racing-helmet-rally-21224.jpg",
    rank: "1",
    discord: "Katlewi (CHAWA) #6479",
    description:
      "Chawa rocketed to the top of the blacklist using the R32. Now he rolls the streets like he owns them. He'll do anything he can to give himself an edge. That includes messin' with your head. Remember, you can't trust anything he says.",
  },
  {
    id: Math.random(),
    name: "ICO SAN",
    imgUrl:
      "https://torange.biz/photofxnew/21/HD/image-profile-picture-racing-helmet-rally-21224.jpg",
    rank: "2",
    discord: "Jico#2079",
    description:
      "For a japanese driver , Ico owned the streets in japan and became the most wanted driver ! To avoid getting cought and spend the rest of his life in jail , Chawa gave him a hand and invited him to join his crew in Los Santos ! He is ranked 2nd but dont underestimate him he's the same level as Chawa",
  },
  {
    id: Math.random(),
    name: "Antonio Vega AKA Flexi",
    imgUrl:
      "https://torange.biz/photofxnew/21/HD/image-profile-picture-racing-helmet-rally-21224.jpg",
    rank: "3",
    discord: "Flexi#4642",
    description:
      "I don't know how Antonio does it, man. His nights are spent in the clubs and days on the streets. This guy's got a lot of street rep. Cops hate him and racers want to be like him. His flash gray Skyline GTR R-33 has cops swarming around it all the time.",
  },
  {
    id: Math.random(),
    name: "Asher Ace AKA Ash",
    imgUrl:
      "https://torange.biz/photofxnew/21/HD/image-profile-picture-racing-helmet-rally-21224.jpg",
    rank: "4",
    discord: "ΛƧΉ#7665",
    description: "...",
  },
  {
    id: Math.random(),
    name: "Paul Walker AKA BODOUS",
    imgUrl:
      "https://torange.biz/photofxnew/21/HD/image-profile-picture-racing-helmet-rally-21224.jpg",
    rank: "5",
    discord: "! YSF/BODOS#4463",
    description: "...",
  },
  {
    id: Math.random(),
    name: "Ray AKA Extatz",
    imgUrl:
      "https://torange.biz/photofxnew/21/HD/image-profile-picture-racing-helmet-rally-21224.jpg",
    rank: "6",
    discord: "Extatz#3957",
    description: "...",
  },
  {
    id: Math.random(),
    name: "Isaac DIP AKA Genius",
    imgUrl:
      "https://torange.biz/photofxnew/21/HD/image-profile-picture-racing-helmet-rally-21224.jpg",
    rank: "7",
    discord: "Dip#7208",
    description:
      "This here is Geni. He prides himself on keeping his hacking knowledge good. He’s fast and shreds radar traps everywhere he can. He’s the straight goods. Don’t take him on until you’re ready.",
  },
];
const handleChallenge = (discord) => {
  alert(`Challenge accepted! Contact me on ${discord}`);
};
const RacersPresentation = () => {
  return (
    <div>
      <div id="racepres">
        <div id="pres">
          <h1 className="h1">Who are we ?</h1>
          <p>
            The Blacklist : We are the street rulers of los santos having the
            best drivers in the city.
            <br /> To become a member you need to prove your self during the
            races & cops poruits to get a chance to challenge some BLACKLIST
            members in races and by winning you take their rank.
          </p>
        </div>
        <img
          src="https://cdn.discordapp.com/attachments/874040015779426315/1078977231960944660/blacklist_logo2.png"
          alt="blacklist"
        />
      </div>

      <div>
        <h1 className="h1" style={{ marginLeft: "130px", marginTop: "30px" }}>
          Blacklist Members
        </h1>
        <div className="Card-cont">
          {members.map((el) => (
            <Card
              key={el.id}
              style={{
                width: "24rem",
                height: "650PX",
                margin: "25px",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1595803475218-21bd60bfd520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFuY2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80)",

                backgroundSize: "120%",
                backgroundPositionY: "50%",
                backgroundPositionX: "50%",
                boxShadow: "5px 5px 5px 5px black",
                textAlign: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={el.imgUrl}
                style={{
                  width: "18rem",
                  height: "18rem",
                  borderRadius: "100%",
                  border: "white 2px solid",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
              <Card.Body
                style={{
                  width: "100%",
                  backdropFilter: "blur(4px)",
                  height: "265px",
                }}
              >
                <Card.Title
                  style={{ color: "yellow", fontFamily: "Righteous" }}
                >
                  {el.name}
                </Card.Title>
                <Card.Text
                  style={{
                    height: "180px",
                    color: "white",
                    marginTop: "20px",
                  }}
                >
                  {el.description}
                </Card.Text>
                <Card.Text style={{ color: "white" }}>
                  BLACKLIST Rank : {el.rank}
                </Card.Text>

                <Button
                  variant="danger"
                  onClick={() => handleChallenge(el.discord)}
                >
                  Challenge
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <div id="carousselle">
        <h1 className="h1" style={{ marginLeft: "130px" }}>
          Blacklist Cars
        </h1>
        <Carousel fade className="caro">
          {racersCars.map((el) => (
            <Carousel.Item key={el.id}>
              <img
                className="d-block w-100"
                src={el.carImg}
                alt="First slide"
                style={{
                  height: "900px",
                  borderRadius: "15PX",
                  border: "white solid 2px",
                }}
              />
              <Carousel.Caption
                style={{
                  border: "white solid 2px",
                  backgroundColor: "black",
                  width: "80%",
                  borderTopLeftRadius: "50px",
                  borderBottomLeftRadius: "50px",
                  marginLeft: "200px",
                  height: "90px",
                }}
              >
                <h3 className="carname">{el.carName}</h3>
                <p className="carowner">Owner : {el.owner} </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div>
        <h1 className="h1" style={{ marginLeft: "130px" }}>
          How to become a member ?
        </h1>
        <p className="parag">
          All you need to do is to prove your self in the street racing scenes,
          have a good knowledge about the cars & porsuits , after that you'll be
          challenged by some of the blacklist members each time you beat a
          member you get his rank & other rewards (Cars,Upgrades,Nitros...).
          Each member is gonna demand a number of races :
        </p>
        <ul className="lista">
          <li>Sprint :</li>
          <p>
            The blacklist member selects his best sprint race, a sprint race is
            a 1 lap race from start line to a finish line.
          </p>
          <img
            src="https://cdn.discordapp.com/attachments/874040015779426315/1079049792883281920/SPRINT.png"
            alt=""
            style={{
              margin: "10px",
              borderRadius: "30px",
              border: " solid white 4px",
            }}
          />

          <li>Circuit : </li>
          <p>Race with a number of laps.</p>
          <img
            src="https://cdn.discordapp.com/attachments/874040015779426315/1079050605953294356/latest.png"
            alt=""
            style={{
              margin: "10px",
              borderRadius: "30px",
              border: " solid white 4px",
            }}
          />
          <li style={{ width: "300px", margin: "0px" }}>Drag Race :</li>
          <p style={{ width: "1300px", margin: "0px" }}>
            A race in a straight line starting from a standstill, the winner
            being the car that can accelerate the fastest.
            <br />
            You must make a wheelie on the start so choose your muscle car
            wisely.
          </p>
          <div style={{ dispay: "flex", margin: "0px" }}>
            <img
              src="https://cdn.discordapp.com/attachments/874040015779426315/1079050995239239740/drag.png"
              alt=""
              style={{
                margin: "10px",
                borderRadius: "30px",
                border: " solid white 4px",
                height: "400px",
              }}
            />
            <img
              src="https://cdn.discordapp.com/attachments/874040015779426315/1079051414292140122/maxresdefault.png"
              alt=""
              style={{
                margin: "10px",
                borderRadius: "30px",
                border: " solid white 4px",
                height: "400px",
              }}
            />
          </div>
          <li>High Heat Porsuit :</li>
          <p>
            We send you on a mission : drug deal or a gun deal, and the police
            will porsuit you. if you make it safe ! Welcome to the crew.
          </p>
          <img
            src="https://cdn.discordapp.com/attachments/874040015779426315/1079052332978946078/197784-gta-5-950x480-1.png"
            alt=""
            style={{
              margin: "10px",
              borderRadius: "30px",
              border: " solid white 4px",
              height: "400px",
            }}
          />
          <p>GOOD LUCK.</p>
        </ul>
      </div>
    </div>
  );
};

export default RacersPresentation;
