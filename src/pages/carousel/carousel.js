import headphone from "../../assests/headphone.jpg";
import games from "../../assests/games.jpg";
import mobiles from "../../assests/smartphone.jpg";

export const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              className="d-block "
              style={{
                height: "700px",
                width: "100%",
                padding: "5% 0 5% 0",
                zIndex: "-1",
                backgroundColor: "#e3e3ea",
              }}
              src={headphone}
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Power and Portability at your fingertips</h1>
              <p>
                {" "}
                Discover our wide range of laptops for all your computing needs.
                From ultrabooks to gaming laptops, our selection offers the
                perfect combination of power and portability for your lifestyle.
              </p>
              <button type="button" class="btn btn-outline-secondary">
                shop Now
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block"
              style={{
                height: "700px",
                width: "100%",
                padding: "5% 0 5% 0",
                zIndex: "-1",
                backgroundColor: "#e3e3ea",
              }}
              src={mobiles}
              alt="Second slide"
            />

            <div
              className="carousel-caption d-none d-md-block"
              style={{ color: "black" }}
            >
              <h1 style={{ fontFamily: "roboto" }}>Stay Connected on the Go</h1>
              <p>
                {" "}
                Keep up with the latest trends and stay connected on-the-go with
                our selection of smartphones. Choose from top brands and
                affordable options, with advanced features to enhance your
                mobile experience.
              </p>
              <button
                type="button"
                class="btn btn-outline-warning"
                style={{ color: "black" }}
              >
                shopNow
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block"
              style={{
                height: "700px",
                width: "100%",
                padding: "5% 0 5% 0",
                zIndex: "-1",
                backgroundColor: "#e3e3ea",
              }}
              src={games}
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>The Ultimate Gaming Experience</h1>
              <p>
                Enhance your lifestyle with our range of smartwatches. Monitor
                your fitness goals and stay connected to your digital life with
                ease. Choose from popular brands and a variety of styles and
                features.
              </p>
              <button type="button" class="btn btn-outline-secondary">
                shop Now
              </button>
            </div>
          </div>
          {/* <div className="carousel-item">
      <img className="d-block"   style={{"height":"500px","width":"100%","padding":"2%",backgroundColor:"#e3e3ea" }}src={watch} alt="Third slide"/>
    </div> */}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
