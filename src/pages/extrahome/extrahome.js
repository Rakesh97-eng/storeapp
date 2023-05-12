import computer from "../../assests/computer.jpg";
import "./extrahome.css";
export const Consultation = () => {
  return (
    <>
      <div className="consultcontainer">
        <img src={computer} className="extraimg" />
        <div className="consultparent">
          <h3>Are you confused,which product is suitable for you ? </h3>
          <div className="consultchild">
            <h3>Need Consultations?</h3>
            <button>Book Now</button>
          </div>
          <p>Get Ultimate solution from our talent</p>
        </div>
      </div>
    </>
  );
};

export const Offer = () => {
  return (
    <>
      <div className="parallax">
        
          <h3>Limited Time Offer</h3>
          <h4>Special Addition</h4>
          <p>
            It is a limited-time promotion that provides customers with an
            exclusive discount or unique product bundle
          </p>
          <button>ShopNow</button>
        
      </div>
    </>
  );
};
