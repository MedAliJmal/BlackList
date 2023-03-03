import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RaceCategory = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div style={{ height: "4000px" }}>
      <h1 className="h1 h1spec" style={{ marginTop: "30px" }}>
        {" "}
        There are 3 race categories :
      </h1>
      <div className="categr">
        <p className="parag">
          The categories are selected by the car type (how it handles, the top
          speed, and the acceleration) we tried to select the best cars for each
          category to make sure that the races are fair enough.
        </p>
        <ul>
          <li
            className="parag paragli"
            style={{ color: "white", fontSize: "25px" }}
          >
            C Category :
          </li>
          <div className="catcontainer">
            <p className="parag paragrc">
              Cars that have a low speed that doesn't surpass 170 KM/H , a
              shitty handling & a useless acceleration rate.
            </p>
            <img
              src="https://cdn.discordapp.com/attachments/874040015779426315/1079047465560457326/100e8e-20200624200637_1.png"
              alt=""
              style={{
                margin: "0px",
                borderRadius: "30px",
                border: " solid white 4px",
              }}
            />
            <Link to={"/Category/C"} style={{ textDecoration: "none" }}>
              {" "}
              <Button
                style={{ width: "200px", margin: "20px" }}
                variant="outline-danger"
              >
                Check Cars
              </Button>
            </Link>
          </div>
          <li
            className="parag paragli"
            style={{ color: "white", fontSize: "25px" }}
          >
            B Category :
          </li>
          <div className="catcontainer">
            <p className="parag paragrc">
              Cars that have approximately a top speed of 210 KM/H , a pretty
              good handling & an acceptable acceleration rate.
            </p>
            <img
              src="https://cdn.discordapp.com/attachments/874040015779426315/1079053211698217051/GTA-Online-summer-update-2021-1463188.png"
              alt=""
              style={{
                margin: "0px",
                borderRadius: "30px",
                border: " solid white 4px",
              }}
            />
            <Link to={"/Category/B"} style={{ textDecoration: "none" }}>
              {" "}
              <Button
                style={{ width: "200px", margin: "20px" }}
                variant="outline-danger"
              >
                Check Cars
              </Button>
            </Link>
          </div>
          <li
            className="parag paragli "
            style={{ color: "white", fontSize: "25px" }}
          >
            S Category :
          </li>
          <div className="catcontainer">
            <p className="parag paragrc">
              Cars that have a top speed of 220+ KM/H , a great handling & a
              decent acceleration rate.
            </p>
            <img
              src="https://cdn.discordapp.com/attachments/874040015779426315/1079057039269048380/154040-258396-258395_rc.png"
              alt=""
              style={{
                margin: "0px",
                borderRadius: "30px",
                border: " solid white 4px",
              }}
            />
            <Link to={"/Category/S"} style={{ textDecoration: "none" }}>
              {" "}
              <Button
                style={{ width: "200px", margin: "20px" }}
                variant="outline-danger"
              >
                Check Cars
              </Button>
            </Link>
          </div>
          <li
            className="parag paragli"
            style={{ color: "white", fontSize: "25px" }}
          >
            S+ Category :{" "}
          </li>
          <div className="catcontainer">
            <p className="parag paragrc">It contains every imported car.</p>
            <img
              src="https://cdn.discordapp.com/attachments/874040015779426315/1079057412461432953/2-1024x575.png"
              alt=""
              style={{
                margin: "0px",
                borderRadius: "30px",
                border: " solid white 4px",
              }}
            />
            <a href="https://discord.gg/dictators">
              {" "}
              <Button
                style={{ width: "200px", margin: "20px" }}
                variant="outline-danger"
              >
                Get your car from DS SHOP
              </Button>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default RaceCategory;
