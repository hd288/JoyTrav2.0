import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import carouselData from "./carouselData.js";

export default function HomeCarousel() {
  const carouselImageStyle = {
    maxHeight: "1000px",
  };
  const carouselCaptionStyle = {
    backgroundColor: "#8d90a4a7",
    position: "absolute",
    width:"100%",
    bottom: "0",
    paddingTop: "1.25rem",
    paddingBottom: "1.25rem",
    color: "#fff",
    textAlign: "center",
  };
  return (
    <Carousel fade data-bs-theme="light">
      {carouselData.map((data, index) => (
        <Carousel.Item key={index} interval={1500}>
          <Image
            style={carouselImageStyle}
            className="d-block w-100 object-fit-cover"
            src={data.image}
            alt="Image"
          />
          
          <div style={carouselCaptionStyle}>
            <h5>{data.place}</h5>
            <p>{data.intro}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
