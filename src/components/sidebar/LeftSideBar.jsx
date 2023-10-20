import React from "react";
import { Carousel, Image } from "react-bootstrap";
import slide from "./SlideData";

export default function SideBarLeft() {
  return (
    <>
      <Carousel className="w-100">
        {slide.map((d, index) => (
          <Carousel.Item key={index} interval={1000}>
            <Image
              style={{ minHeight: "1000px", objectFit: "cover" }}
              className="d-block w-100"
              src={d.image}
              alt="images"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
