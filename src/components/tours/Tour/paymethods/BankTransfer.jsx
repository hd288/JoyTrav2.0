import React from "react";
import { Card, Container, Image } from "react-bootstrap";

export default function BankTransfer() {
  return (
    <Card className="d-flex gap-2 p-3">
      
      <Image
        thumbnail
        className="w-50"
        src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.15752-9/370482852_1995443364166852_792338766135578110_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=vJ2vG3KQwP0AX8fE_TX&_nc_ht=scontent.fsgn5-13.fna&oh=03_AdSK3duR4qwHnIcRxfYYCUdupcKzjd67UoItKstYna1Y2Q&oe=65167BC7"
      />
      <Container>
        After completing the transfer, please send an email to admin@joytrav.com{" "}
        <br />
        or call the hotline 0696969 for confirmation from our company. <br />
        <br />
        Account Name: Joytrav Travel and Marketing JSC - Joytrav <br />
        Account Abbreviation: JOYTRAV <br />
        Account Number: 922226686 Bank: MB Bank <br />
      </Container>
    </Card>
  );
}
