import { Container, Image } from "react-bootstrap";
import NavAdmin from "./NavAdmin";
export default function Admin() {
  return (
    <>
      <NavAdmin />
      <Container className="d-flex justify-content-center">
        <Image className="py-5 w-50"
          src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/373458371_335444102244561_5802516667513664981_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=41Da7slfs68AX_E1cO4&_nc_ht=scontent.fsgn2-4.fna&oh=03_AdRtPM7cLVLO_0fig2XvVlFPp4c6YvKkxrA12ZKKaNaauQ&oe=6520898F"
          alt="Welcome image"
        />
      </Container>
    </>
  );
}
