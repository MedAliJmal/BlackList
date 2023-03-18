import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
const supercars = [
  {
    id: Math.random(),
    name: "9F",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079134199304437800/9f-cabrio.png",
  },
  {
    id: Math.random(),
    name: "Adder",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079145955590406275/adder.png",
  },
  {
    id: Math.random(),
    name: "Taipan",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079134775568236615/taipan.png",
  },
  {
    id: Math.random(),
    name: "Champion",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079135677188427856/gtaonline-vehicle-champion-8439-1080.png",
  },
  {
    id: Math.random(),
    name: "Entity MT",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079135974254194708/entity-mt.png",
  },
  {
    id: Math.random(),
    name: "GP1",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079136245566939156/gp1.png",
  },
  {
    id: Math.random(),
    name: "Reaper",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079137126777638992/reaper.png",
  },
  {
    id: Math.random(),
    name: "FMJ",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079137341672804402/fmj.png",
  },
  {
    id: Math.random(),
    name: "Tyrus",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079137764253114368/tyrus.png",
  },
  {
    id: Math.random(),
    name: "Tyrant",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079137930003619880/tyrant.png",
  },
  {
    id: Math.random(),
    name: "Furia",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079138484549332992/GTA_5_Furia_Main-6516-1080.png",
  },
  {
    id: Math.random(),
    name: "Pfister 811",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079138709053657138/811.png",
  },
  {
    id: Math.random(),
    name: "Deveste",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079138895108771890/deveste-eight.png",
  },
  {
    id: Math.random(),
    name: "Entity XXR",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079139185589506109/entity-xxr.png",
  },
  {
    id: Math.random(),
    name: "Zorrusso",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079139349066694776/GTA5_Zorrusso_Main-5532-1080.png",
  },
  {
    id: Math.random(),
    name: "Tigon",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079139665736634458/GTAOnline_Screenshot_NewUpdate_ComingSoon-6910-1080.png",
  },
  {
    id: Math.random(),
    name: "Autarch",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079139846511145081/autarch.png",
  },
  {
    id: Math.random(),
    name: "Visione",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079140007811493908/GTA5_Visione_Main-5526-1080.png",
  },
  {
    id: Math.random(),
    name: "XA-21",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079140263747932250/xa-21.png",
  },
  {
    id: Math.random(),
    name: "Vagner",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079140452516769792/vagner.png",
  },
  {
    id: Math.random(),
    name: "S80RR",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079140692921688115/s80rr.png",
  },
  {
    id: Math.random(),
    name: "Zeno",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079140952674930688/zeno.png",
  },
  {
    id: Math.random(),
    name: "Tezeract",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079141119889244220/tezeract.png",
  },
  {
    id: Math.random(),
    name: "LM87",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079141319345197077/lm87.png",
  },
  {
    id: Math.random(),
    name: "TenF (10F)",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079141585289236490/10f.png",
  },
  {
    id: Math.random(),
    name: "LE7B",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079141774313926676/re-7b.png",
  },
  {
    id: Math.random(),
    name: "10F Widebody",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079141968799604867/10f-custom.png",
  },
  {
    id: Math.random(),
    name: "Krieger",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079142258068172800/krieger.png",
  },
  {
    id: Math.random(),
    name: "Emerus",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079144013245993030/emerus.png",
  },
  {
    id: Math.random(),
    name: "Thrax",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079144580643041380/thrax.png",
  },
  {
    id: Math.random(),
    name: "Cyclone",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079144762151538819/cyclone.png",
  },
  {
    id: Math.random(),
    name: "Ignus",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079144948311523388/weaponized-ignus.png",
  },
  {
    id: Math.random(),
    name: "ToreroXO",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079145381692190870/gta-mag-pegassi-torero-xo-gtao-872211.png",
  },
  {
    id: Math.random(),
    name: "Coquette D10",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079146863057449100/coquette-d10.png",
  },
  {
    id: Math.random(),
    name: "Itali GTB",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079147788325101588/itali-gtb-custom.png",
  },
  {
    id: Math.random(),
    name: "Entity XF",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079148412089417828/entity-xf.png",
  },
  {
    id: Math.random(),
    name: "Itali RSX",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079149880615911606/itali-rsx.png",
  },
  {
    id: Math.random(),
    name: "Tempesta",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079150439423029358/tempesta.png",
  },
  {
    id: Math.random(),
    name: "Neo",
    imgUrl:
      "https://cdn.discordapp.com/attachments/1068590306611695707/1079174082341376060/neo.png",
  },
  {
    id: Math.random(),
    name: "Nero Costum",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079151316565250229/nero-custom.png",
  },
  {
    id: Math.random(),
    name: "Nero",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079152197260034159/nero.png",
  },
  {
    id: Math.random(),
    name: "Osiris",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079151728559145121/osiris.png",
  },
  {
    id: Math.random(),
    name: "Vacca",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079152257901285393/vacca.png",
  },
  {
    id: Math.random(),
    name: "Zentorno",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079152440525455430/zentorno.png",
  },
  {
    id: Math.random(),
    name: "Infernus",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079153171693310013/infernus.png",
  },
  {
    id: Math.random(),
    name: "Penetrator",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079153853682946099/penetrator.png",
  },
  {
    id: Math.random(),
    name: "T20",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079154210114916372/t20.png",
  },
  {
    id: Math.random(),
    name: "Itali GTO",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079154280927350855/itali-gto.png",
  },
  {
    id: Math.random(),
    name: "Pariah",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079155277464612864/pariah.png",
  },
  {
    id: Math.random(),
    name: "Jugular",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079156777062514698/jugular.png",
  },
  {
    id: Math.random(),
    name: "Jester",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079156064462852117/jester.png",
  },
  {
    id: Math.random(),
    name: "Sentinel WideBody",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079156424694841395/sentinel-classic-widebody.png",
  },
  {
    id: Math.random(),
    name: "Cheetah",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079354459697721404/cheetah.png",
  },
  {
    id: Math.random(),
    name: "Cheetah Classic",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079354638463160390/cheetah-classic.png",
  },
  {
    id: Math.random(),
    name: "TurismoR",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079359960800043088/turismo-r.png",
  },
  {
    id: Math.random(),
    name: "Corsita",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079360478976937994/corsita.png",
  },
  {
    id: Math.random(),
    name: "SC1",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079360853465370686/sc1.png",
  },
  {
    id: Math.random(),
    name: "Viseris",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079367828966219877/viseris.png",
  },
  {
    id: Math.random(),
    name: "Ardent",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079368327048200192/ardent.png",
  },
  {
    id: Math.random(),
    name: "Growler",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079368700769079326/growler.png",
  },
];
const CategoryS = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [carsearch, setCarsearch] = useState("");
  const carlist = supercars.filter((el) =>
    el.name.toUpperCase().trim().includes(carsearch.trim().toUpperCase())
  );
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        height: "150%",
        paddingBottom: "200px",
      }}
    >
      <h1 className="h1 h1spec">Drift Cars :</h1>
      <p className="parag">
        You can get your drift car only if you have a good reputation with the
        blacklist!
      </p>
      <Form style={{ width: "40%" }}>
        <Form.Group
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Control
            type="text"
            placeholder="Enter your car name"
            value={carsearch}
            onChange={(e) => setCarsearch(e.target.value)}
          />
          <Form.Text className="text-muted">
            If your car doesn't appear ask for racers opinion about the car
            category.
          </Form.Text>
        </Form.Group>
      </Form>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {carlist.map((el) => (
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "70px",
          flexWrap: "wrap",
        }}
      >
        <img
          src="https://cdn.discordapp.com/attachments/874040015779426315/1086347773890273450/racerssss.png"
          alt="ico san"
          style={{
            height: "40vh",
            width: "auto",
            border: "2px solid white",
            borderRadius: "15px",
          }}
        />
        <p
          className="reminder"
          style={{
            border: "2px white solid",
            borderRadius: "15px",
            backgroundColor: "black",

            color: "white",

            textAlign: "center",
          }}
        >
          Just a reminder : <br /> - Drive safely ! make sure to be fair in
          races and avoid pitting other players ! make it competitive but fair .{" "}
          <br />- Make sure you check the ranked races schedule and get enough
          fuel for it. GOOD LUCK
        </p>
      </div>
    </div>
  );
};

export default CategoryS;
