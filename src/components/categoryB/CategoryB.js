import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";

const cars = [
  {
    id: Math.random(),
    carName: "Remus",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079074663117889728/remus.png",
  },
  {
    id: Math.random(),
    carName: "Previon",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079074820010020994/previon.png",
  },
  {
    id: Math.random(),
    carName: "RT3000",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079074963828518962/rt3000.png",
  },
  {
    id: Math.random(),
    carName: "Jester Classic",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079075082753822841/jester-classic.png",
  },
  {
    id: Math.random(),
    carName: "Flash GT",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079075243961888838/flash-gt.png",
  },
  {
    id: Math.random(),
    carName: "Cypher",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079075357182935132/cypher.png",
  },
  {
    id: Math.random(),
    carName: "Deity",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079075548015374396/latest.png",
  },
  {
    id: Math.random(),
    carName: "TailgaterS",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079076162019524618/tailgater-s.png",
  },
  {
    id: Math.random(),
    carName: "Penumbra2",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079076280806420570/44d89062eff5535b1269e5ee808f70cd.png",
  },
  {
    id: Math.random(),
    carName: "Omnis",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079076741701701652/GTA5_Omnis_Main-5415-1080.png",
  },
  {
    id: Math.random(),
    carName: "Dominator GTX",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079076913965965352/gta-mag-vapid-dominator-gtx-238601.png",
  },
  {
    id: Math.random(),
    carName: "Sentinel Classic",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079077076667203726/sentinel-classic.png",
  },
  {
    id: Math.random(),
    carName: "Kuruma",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079077196716576889/GTA5_Kuruma_Main-5408-1080.png",
  },
  {
    id: Math.random(),
    carName: "Banshee",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079077329147531277/banshee.png",
  },
  {
    id: Math.random(),
    carName: "RapidGT",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079077479504945173/rapid-gt-sports.png",
  },
  {
    id: Math.random(),
    carName: "Massacro",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079077611206094888/massacro.png",
  },
  {
    id: Math.random(),
    carName: "Surano",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079077792005750844/surano.png",
  },
  {
    id: Math.random(),
    carName: "Vecter",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079077975397507113/vectre.png",
  },
  {
    id: Math.random(),
    carName: "Savestra",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079078126690254859/savestra.png",
  },
  {
    id: Math.random(),
    carName: "Elegy RH8",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079078322786533386/elegy-rh8.png",
  },
  {
    id: Math.random(),
    carName: "Sultan",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079078499979116685/sultan.png",
  },
  {
    id: Math.random(),
    carName: "Vigero ZX",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079078759690403961/latest.png",
  },
  {
    id: Math.random(),
    carName: "Bestia GTS",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079078913722032209/GTA5_Bestiagts_Main-5377-1080.png",
  },
  {
    id: Math.random(),
    carName: "Sultan2",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079079046782128138/sultan-classic.png",
  },
  {
    id: Math.random(),
    carName: "Sultan3",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079079172170854460/sultan-rs-classic.png",
  },
  {
    id: Math.random(),
    carName: "Euros",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079079310280892436/euros.png",
  },
  {
    id: Math.random(),
    carName: "Sugoi",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079079471325388840/GTA5_Vehicle_Sugoi-6603-1080.png",
  },
  {
    id: Math.random(),
    carName: "Cinquemila",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079079715769417848/latest.png",
  },
  {
    id: Math.random(),
    carName: "Rhinehart",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079079848280080506/rhinehart.png",
  },
  {
    id: Math.random(),
    carName: "Buffalo STX",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079080077133881454/latest.png",
  },
  {
    id: Math.random(),
    carName: "Dominator ASP",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079080209384472616/dominator-asp.png",
  },
  {
    id: Math.random(),
    carName: "Jester RR",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079080453509750856/jester-rr.png",
  },
  {
    id: Math.random(),
    carName: "Drafter",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079080569087983717/GTA5_Drafter8f_Main-5390-1080.png",
  },
  {
    id: Math.random(),
    carName: "Elegy Retro Costum",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079080704798884021/elegy-retro-custom.png",
  },
  {
    id: Math.random(),
    carName: "Feltzer",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079080804250046594/feltzer.png",
  },
  {
    id: Math.random(),
    carName: "Komoda",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079080948030771310/komoda.png",
  },
  {
    id: Math.random(),
    carName: "Verlierer",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079081147658686514/verlierer.png",
  },
  {
    id: Math.random(),
    carName: "VSTR",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079081255766867968/v-str.png",
  },
  {
    id: Math.random(),
    carName: "Seven-70",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079081406820515970/seven-70.png",
  },
  {
    id: Math.random(),
    carName: "Comet Retro Costum",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079081536286101594/comet-retro-custom.png",
  },
  {
    id: Math.random(),
    carName: "Comet S2",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079081668763193505/gtaonline-vehicle-comets2-8469-1080.png",
  },
  {
    id: Math.random(),
    carName: "Omnis egt",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079081783859093605/omnis-e-gt.png",
  },
  {
    id: Math.random(),
    carName: "Sultan RS",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079081892122464358/sultan-rs.png",
  },
  {
    id: Math.random(),
    carName: "Panthere",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079082320658694205/xJTO1FZ.png",
  },
  {
    id: Math.random(),
    carName: "CometSR",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079082460765245601/GTA5_Cometsr_Main-5386-1080.png",
  },

  {
    id: Math.random(),
    carName: "Calico",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079082605724586155/0aafb25d151cb3a76fbbccc259b81be1.png",
  },
  {
    id: Math.random(),
    carName: "Paragon",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079082729594953758/paragon-r.png",
  },
  {
    id: Math.random(),
    carName: "Retinue2",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079114899902439464/retinue-mk-ii.png",
  },
  {
    id: Math.random(),
    carName: "Schafter",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079361838082441237/schafter.png",
  },
  {
    id: Math.random(),
    carName: "Specter",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079361993120677928/specter.png",
  },
  {
    id: Math.random(),
    carName: "Schwatzer",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079362390136725564/schwartzer.png",
  },
  {
    id: Math.random(),
    carName: "Coquette Classic",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079363004711321600/coquette-classic.png",
  },
  {
    id: Math.random(),
    carName: "F620",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079363813750616156/f620.png",
  },
  {
    id: Math.random(),
    carName: "Coquette",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079363963197861958/coquette-topless.png",
  },
  {
    id: Math.random(),
    carName: "Monroe",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079364425527590912/monroe.png",
  },
  {
    id: Math.random(),
    carName: "Clique",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079365541199884398/clique.png",
  },
  {
    id: Math.random(),
    carName: "Coquette Blackfin",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079365488783667240/latest.png",
  },
  {
    id: Math.random(),
    carName: "Kanjo",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079348392662155304/BlistaKanjo-GTAO-front.png",
  },
  {
    id: Math.random(),
    carName: "Kanjo SJ",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079348816874057799/kanjo-sj.png",
  },
  {
    id: Math.random(),
    carName: "Voltic",
    carImg:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079367238907351080/voltic.png",
  },
];

const CategoryB = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "50px", height: "5500px" }}>
      <h1 className="h1 h1spec" style={{ marginLeft: "60px" }}>
        Class B race cars :
      </h1>
      <p className="parag">
        Cars that have approximately a top speed of 210 KM/H , a pretty good
        handling & an acceptable acceleration rate.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {cars.map((el) => (
          <Card
            key={el.id}
            style={{
              backgroundImage:
                "url(https://www.teahub.io/photos/full/110-1106101_racing-cars-wallpapers-4k-hd.jpg)",
              backgroundSize: "100%",
              boxShadow: "8px 8px 8px 8px black",
              margin: "20px",
            }}
          >
            <Card.Img variant="top" src={el.carImg} />
            <Card.Body>
              <Card.Title className="card-tit" style={{ color: "white" }}>
                {el.carName}
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryB;
