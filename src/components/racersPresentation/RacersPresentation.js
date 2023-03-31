import React, { useEffect } from "react";
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
      "https://c10.patreonusercontent.com/4/patreon-media/p/post/40824041/091c8c3633024d559e00ec3f6dbf10c0/eyJxIjoxMDAsIndlYnAiOjB9/1.jpg?token-time=1680652800&token-hash=e72EEPa4x3A02gghyBog3hMRwA3qkmd9Q7js6mbH0Wo%3D",
    carName: "Dodge Charger R/T69",
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
      "https://img.gta5-mods.com/q95/images/bmw-m4-gts-liberty-walk/cdd8ce-20211226230614_1.jpg",
    carName: "BMW M4 GTS Liberty Walk",
    owner: "Antonio",
  },
  {
    id: Math.random(),
    carImg:
      "https://img.gta5-mods.com/q95/images/2016-mazda-mx-5-pandem-add-on-tuning-animated-engine/e6133a-2.jpg",
    carName: "2016 Mazda MX5 Pandem",
    owner: "Isaac DIP",
  },
  {
    id: Math.random(),
    carImg:
      "https://img.gta5-mods.com/q95/images/ford-mustang-gt-nfs-gt500-2013-add-on/87a2ff-QQ%E5%9B%BE%E7%89%8720160812214419.jpg",
    carName: "Ford Mustang GT500",
    owner: "Tobey",
  },
];

const members = [
  {
    id: Math.random(),
    name: "CHAWA",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1083100239575126067/image.png",
    rank: "1",
    discord: "Katlewi (CHAWA) #6479",
    description:
      "Chawa is a mysterious guy who rocketed to the top of the blacklist using the R32. Now he rolls the streets like he owns them. He'll do anything he can to give himself an edge. That includes messin' with your head. Remember, you can't trust anything he says.",
  },
  {
    id: Math.random(),
    name: "ICO SAN",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1084100389709811722/image7.png",
    rank: "2",
    discord: "Jico#2079",
    description:
      "For a japanese driver , Ico owned the streets in japan and became the most wanted driver ! To avoid getting cought and spend the rest of his life in jail , Chawa gave him a hand and invited him to join his crew in Los Santos ! He is ranked 2nd but dont underestimate him he's the same level as Chawa.",
  },
  {
    id: Math.random(),
    name: "Antonio Vega AKA Flexi",
    imgUrl:
      "https://cdn.discordapp.com/attachments/1006987111586615406/1089311982135558156/image.png",
    rank: "3",
    discord: "Flexi#4642",
    description:
      "I don't know how Antonio does it, man. His nights are spent in the clubs and days on the streets. This guy's got a lot of street rep. Cops hate him and racers want to be like him. His flash gray Skyline GTR R-33 has cops swarming around it all the time.",
  },
  {
    id: Math.random(),
    name: "Tobey Marshall",
    imgUrl:
      "https://cdn.discordapp.com/attachments/992465719851745440/1087498408371163207/image.png",
    rank: "4",
    discord: "! YSF/BODOS#4463",
    description:
      "Tobey is a good mechanic and skilled former race car driver from Mount Kisco, New York, he is framed for a crime he didn't commit. Tobey used to manage his late father's garage :Marshall Performance Motors. Struggling to make ends meet. The garage is closed now because of the case! Then Chawa came and give this talented driver a new chance in LS.",
  },

  {
    id: Math.random(),
    name: "Isaac DIP AKA Geni",
    imgUrl:
      "https://cdn.discordapp.com/attachments/1068590306611695707/1087857434221084672/image.png",
    rank: "5",
    discord: "Dip#7208",
    description:
      "This here is Geni. He prides himself on keeping his hacking knowledge good. He’s fast and shreds radar traps everywhere he can. He’s the straight goods. Don’t take him on until you’re ready.",
  },
  {
    id: Math.random(),
    name: "Mari AKA RACEQUEEN",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1091494336824352839/image.png",
    rank: "6",
    discord: "MARIEM SHINOBI#6122",
    description:
      "Mari Yushimaro , Ico's sister she's is crazy. What she can't conquer with skills, she demolishes with speed. Don't let her sweet looks fool ya. She'll thrash anything she sees, including you. She's not afraid to ding her ride to put you out of commission.",
  },
  {
    id: Math.random(),
    name: "TBD",
    imgUrl:
      "https://torange.biz/photofxnew/21/HD/image-profile-picture-racing-helmet-rally-21224.jpg",
    rank: "7",
    discord: "TBD",
    description: "...",
  },
  {
    id: Math.random(),
    name: "TBD",
    imgUrl:
      "https://torange.biz/photofxnew/21/HD/image-profile-picture-racing-helmet-rally-21224.jpg",
    rank: "8",
    discord: "TBD",
    description: "TBD",
  },
  {
    id: Math.random(),
    name: "TBD",
    imgUrl:
      "https://torange.biz/photofxnew/21/HD/image-profile-picture-racing-helmet-rally-21224.jpg",
    rank: "9",
    discord: "TBD",
    description: "TBD",
  },
  {
    id: Math.random(),
    name: "TBD",
    imgUrl:
      "https://torange.biz/photofxnew/21/HD/image-profile-picture-racing-helmet-rally-21224.jpg",
    rank: "10",
    discord: "TBD",
    description: "TBD",
  },
  {
    id: Math.random(),
    name: "TBD",
    imgUrl:
      "https://torange.biz/photofxnew/21/HD/image-profile-picture-racing-helmet-rally-21224.jpg",
    rank: "11",
    discord: "TBD",
    description: "TBD",
  },
  {
    id: Math.random(),
    name: "TBD",
    imgUrl:
      "https://torange.biz/photofxnew/21/HD/image-profile-picture-racing-helmet-rally-21224.jpg",
    rank: "12",
    discord: "TBD",
    description: "TBD",
  },
];
const handleChallenge = (discord) => {
  alert(`Challenge accepted! Contact me on ${discord}`);
};
const RacersPresentation = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div style={{ height: "150%", paddingBottom: "200px" }}>
      <div id="racepres">
        <div id="pres">
          <h1 className="h1">Who are we ?</h1>
          <p>
            The Blacklist : We are the street rulers of los santos having the
            best drivers in the city.
            <br /> To become a member you need to prove your self during the
            races & cops porsuits to get a chance to challenge some BLACKLIST
            members in races and by winning you take their rank.
          </p>
        </div>
        <img
          src="https://cdn.discordapp.com/attachments/874040015779426315/1078977231960944660/blacklist_logo2.png"
          alt="blacklist"
        />
      </div>

      <div>
        <h1 className="h1 h1spec" style={{ marginTop: "30px" }}>
          Blacklist Members
        </h1>
        <div className="Card-cont">
          {members.map((el) => (
            <Card
              key={el.id}
              style={{
                width: "24rem",
                height: "700PX",
                margin: "25px",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1595803475218-21bd60bfd520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFuY2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80)",

                backgroundSize: "140%",
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
                  height: "315px",
                }}
              >
                <Card.Title
                  style={{ color: "yellow", fontFamily: "Righteous" }}
                >
                  {el.name}
                </Card.Title>
                <Card.Text
                  style={{
                    height: "230px",
                    color: "white",
                    marginTop: "20px",
                  }}
                >
                  {el.description}
                </Card.Text>
              </Card.Body>
              <Card.Text style={{ color: "white", marginTop: "5px" }}>
                BLACKLIST Rank : {el.rank}
              </Card.Text>
              <Button
                variant="danger"
                onClick={() => handleChallenge(el.discord)}
              >
                Challenge
              </Button>
            </Card>
          ))}
        </div>
      </div>
      <div id="carousselle">
        <h1 className="h1 h1spec">Blacklist Cars</h1>
        <Carousel fade className="caro">
          {racersCars.map((el) => (
            <Carousel.Item key={el.id}>
              <img
                className="d-block w-100 caroimg"
                src={el.carImg}
                alt="First slide"
              />
              <Carousel.Caption
                className="desc-caro"
                style={{
                  border: "white solid 2px",
                  backgroundColor: "black",
                  width: "100%",
                  borderTopLeftRadius: "50px",
                  borderBottomLeftRadius: "50px",
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
        <h1 className="h1 h1spec">How to become a member ?</h1>
        <p className="parag parag3">
          All you need to do is to prove your self in the street racing scenes,
          have a good knowledge about the cars & porsuits , after that you'll be
          challenged by some of the blacklist members each time you beat a
          member you get his rank & other rewards (Cars,Upgrades,Nitrous...).
          Each member is gonna demand a number of races :
        </p>
        <ul className="lista">
          <li>Sprint :</li>
          <p className="parag2">
            The blacklist member selects his best sprint race, a sprint race is
            a 1 lap race from start line to a finish line.
          </p>
          <img
            src="https://cdn.discordapp.com/attachments/874040015779426315/1079049792883281920/SPRINT.png"
            alt=""
            className="imgheight"
            style={{
              margin: "10px",
              borderRadius: "30px",
              border: " solid white 4px",
            }}
          />

          <li>Circuit : </li>
          <p className="parag2 testr">Race with a number of laps.</p>
          <img
            src="https://cdn.discordapp.com/attachments/874040015779426315/1079050605953294356/latest.png"
            alt=""
            className="imgheight"
            style={{
              margin: "10px",
              borderRadius: "30px",
              border: " solid white 4px",
            }}
          />
          <li className="h1">Drag Race :</li>
          <p className="parag2">
            A race in a straight line starting from a standstill, the winner
            being the car that can accelerate the fastest.
            <br />
            You must make a wheelie on the start so choose your muscle car
            wisely.
          </p>
          <div style={{ dispay: "flex", margin: "0px" }}>
            <img
              className="imgheight"
              src="https://cdn.discordapp.com/attachments/874040015779426315/1079050995239239740/drag.png"
              alt=""
              style={{
                margin: "10px",
                borderRadius: "30px",
                border: " solid white 4px",
              }}
            />
            <img
              className="imgheight"
              src="https://cdn.discordapp.com/attachments/874040015779426315/1079051414292140122/maxresdefault.png"
              alt=""
              style={{
                margin: "10px",
                borderRadius: "30px",
                border: " solid white 4px",
              }}
            />
          </div>
          <li className="h12">High Heat Porsuit :</li>
          <p className="parag2">
            We send you on a mission : drug deal or a gun deal, and the police
            will porsuit you. if you make it safe ! Welcome to the crew.
          </p>
          <img
            className="imgheight"
            src="https://cdn.discordapp.com/attachments/874040015779426315/1079052332978946078/197784-gta-5-950x480-1.png"
            alt=""
            style={{
              margin: "10px",
              borderRadius: "30px",
              border: " solid white 4px",
            }}
          />
          <p>GOOD LUCK.</p>
        </ul>
      </div>
    </div>
  );
};

export default RacersPresentation;
