import GeneralCards from "../../cards/cards";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faGlobe,faStar,faPercent } from "@fortawesome/free-solid-svg-icons";
import "./chooseus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chooseus = () => {
  return (
    <>
      <div className="choosehead">
        <h3>Why Choose Us</h3>
        <div className="chooseparent">
          <div className="choosecards">
            <FontAwesomeIcon className="icons" icon={faGlobe} />

            <p>World Wide shipping</p>
            <p style={{ fontSize: "15px", fontWeight: "normal" }}>
              We offer worldwide shipping to make our products accessible to
              customers all over the world.
            </p>
          </div>
          <div className="choosecards">
            {" "}
            <FontAwesomeIcon className="icons"  icon={faStar} />
            <p>Best Quality</p>
            <p style={{ fontSize: "15px", fontWeight: "normal" }}>
              We offer worldwide shipping to make our products accessible to
              customers all over the world.
            </p>
          </div>
          <div className="choosecards">
            {" "}
            <FontAwesomeIcon className="icons" icon={faPercent} />       
                <p>Best Offers</p>
            <p style={{ fontSize: "15px", fontWeight: "normal" }}>
              We offer worldwide shipping to make our products accessible to
              customers all over the world.
            </p>
          </div>
          <div className="choosecards">
            {" "}
            <FontAwesomeIcon className="icons" icon={faShieldHalved} />
            <p>Secure Payments</p>
            <p style={{ fontSize: "15px", fontWeight: "normal" }}>
              We offer worldwide shipping to make our products accessible to
              customers all over the world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chooseus;
