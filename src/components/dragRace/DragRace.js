import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

const musclecars = [
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079536831214919790/buffalo-stx.png",
    name: "Buffalo STX",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079537072303505538/weevil-custom.png",
    name: "BF Weevil Custom",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079537169904967781/dominator-asp.png",
    name: "Dominator ASP",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079537280240337076/vigero-zx.png",
    name: "Vigero ZX",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079539325412331651/impaler.png",
    name: "Impaler",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079537462088585216/yosemite.png",
    name: "Yosemite",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079537863668027462/sabre-turbo-custom.png",
    name: "Sabre",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079538048968179872/clique.png",
    name: "Clique",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079538249367830558/ruiner-zz-8.png",
    name: "Ruiner ZZ-8",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079539070407028746/dominator-gtt.png",
    name: "Dominator GTT",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079539589565403136/dominator-gtx.png",
    name: "Dominator GTX",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079539785980444752/dominator.png",
    name: "Dominator",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079540168211570759/blade.png",
    name: "Blade",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079540289775091802/tulip.png",
    name: "Tulip",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079540463754809414/dukes.png",
    name: "Dukes",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079540602057797653/coquette-blackfin.png",
    name: "Coquette Blackfin",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079540763093909584/vamos.png",
    name: "Vamos",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079540920736813186/arbiter-gt.png",
    name: "ArbiterGT",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079541069034832043/tahoma.png",
    name: "Tahoma Coupe",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079541276644491395/hermes.png",
    name: "Hermess",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079541385570549780/tulip-m-100.png",
    name: "Tulip M100",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079541606652317736/tampa.png",
    name: "Tampa",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079541777452781662/phoenix.png",
    name: "Phoenix",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1083106934946811945/latest.png",
    name: "Gauntlet",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079541993702690867/hustler.png",
    name: "Hustler",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079542579093323868/ellie.png",
    name: "Ellie",
  },

  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079542688011001946/peyote-gasser.png",
    name: "Peyote Gasser",
  },
  {
    id: Math.random(),
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079542837412118528/nightshade.png",
    name: "Nightshade",
  },
];

const DragRace = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div style={{ height: "150%", paddingBottom: "200px" }}>
      <h1 className="h1 h1spec">What's a drag race ?</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom: "50px",
          flexWrap: "wrap",
        }}
      >
        <p className="parag parag3">
          As you know one of the things demanded to become a member of the crew,
          you need to beat one of the blacklist drivers on a bunch of races, one
          of those races is the Drag Race. So its a straight line track (1/2
          Mile road) , you need to perform a wheelie in the start using your
          muscle car! Wheelies are common in drag racing, where they represent
          torque wasted lifting the front end, rather than moving the vehicle
          forward. They also usually result in raising the center of mass, which
          limits the maximum acceleration. Pick one of the muscle cars down
          below.
        </p>
        <img
          id="lgoo"
          className="imgheight"
          style={{
            border: "4px solid white",
            borderRadius: "30px",
          }}
          src="https://cdn.discordapp.com/attachments/874040015779426315/1079534968390287421/maxresdefault.png"
          alt=""
        />
        <img
          src="https://cdn.discordapp.com/attachments/874040015779426315/1079050995239239740/drag.png"
          alt=""
          className="imgheight"
          style={{
            border: "4px solid white",
            borderRadius: "30px",
            margin: "50px",
          }}
        />
        <img
          className="imgheight"
          style={{
            border: "4px solid white",
            borderRadius: "30px",
            margin: "50px",
          }}
          src="https://i.makeagif.com/media/1-28-2016/RmB6XJ.gif"
          alt=""
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {musclecars.map((el) => (
          <Card
            className="carcard"
            key={el.id}
            style={{
              backgroundImage:
                "url(https://www.teahub.io/photos/full/110-1106101_racing-cars-wallpapers-4k-hd.jpg)",
              backgroundSize: "100%",
              boxShadow: "8px 8px 8px 8px black",
              margin: "20px",
            }}
          >
            <Card.Img variant="top" src={el.imgUrl} />
            <Card.Body>
              <Card.Title className="card-tit" style={{ color: "white" }}>
                {el.name}
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DragRace;
