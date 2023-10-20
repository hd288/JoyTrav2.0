import { Button, Container, Form, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsFillSendFill } from "react-icons/bs";
import slide from "./SlideData";

export default function SideBarRight() {
  const cardTitleStyle = {
    color: "#FFF",
    backgroundImage: "linear-gradient(275deg, #de3cf7 , #00bbff)",
    textAlign: "center",
  };
  return (
    <>
      <Card>
        <Card.Header style={cardTitleStyle} as="h5">
          Top Destinations
        </Card.Header>
        <div className="d-flex flex-wrap">
          {slide.slice(0, 4).map((d, index) => (
            <Image
              key={index}
              className="w-50 p-2"
              style={{
                minHeight: "100px",
                maxHeight: "150px",
                objectFit: "cover",
              }}
              src={d.image}
              alt={`image-${index}`}
            />
          ))}
        </div>
      </Card>
      <hr />
      <Card>
        <Card.Header style={cardTitleStyle} as="h5">
          Favorited Bloggers
        </Card.Header>

        <Card.Body className="p-1 d-flex justify-content-start gap-2 align-items-center w-100">
          <Image
            variant="top"
            className="w-50"
            src="https://i.ytimg.com/vi/TrbtMqHSmcc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC7Gorz8ME1t3vHrKrn0jurDn7NUQ"
          />
          <Card.Title as="h6">Khoai Lang Thang</Card.Title>
        </Card.Body>

        <Card.Body className="p-1 d-flex justify-content-start gap-2 align-items-center w-100">
          <Image
            variant="top"
            className="w-50"
            src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/329234529_898752718228163_1951761723415478570_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=9XqUSvOfEwUAX_wHBEE&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBGhqPTo0OaMbIGmnxPpAgyydivUt5ESyr2UgytVM70ZQ&oe=64FB49CD"
          />
          <Card.Title as="h6">Hiep Dinh</Card.Title>
        </Card.Body>
      </Card>
      <hr />
      <Card>
        <Card.Header style={cardTitleStyle} as="h5">
          Subscribe
        </Card.Header>

        <Card.Body className="p-2  d-flex flex-column justify-content-start gap-2 align-items-center w-100">
          <Card.Title as="h6">
            Subscribe for exclusive promo codes and the latest news.
          </Card.Title>
          <Container className="d-flex p-0 gap-2">
            <Form.Control type="text" placeholder="Enter your email" />
            <Button variant="warning text-white">
              <BsFillSendFill />
            </Button>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
