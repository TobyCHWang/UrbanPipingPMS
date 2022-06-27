import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SearchForm from "./searchform/SearchForm";
import TicketTable from "./tickettable/TicketTable";
import tickets from "../../assets/data/dummytickets.json";

const ListTickets = () => {
  const [str, setStr] = useState("");
  const [dispTicket, setDispTicket] = useState(tickets);

  useEffect(() => {}, [str, dispTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    // console.log(value);
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );

    // console.log(displayTickets);
    setDispTicket(displayTickets);
  };

  return (
    <Container>
      <Row>
        {/* <Col>
          <Breadcrumb page="Ticket Lists" />
        </Col> */}
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Col>
        <TicketTable tickets={dispTicket} />
      </Col>
    </Container>
  );
};

export default ListTickets;
