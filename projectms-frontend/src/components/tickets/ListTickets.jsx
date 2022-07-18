import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SearchForm from "./searchform/SearchForm";
import TicketTable from "./tickettable/TicketTable";
import { Link } from "react-router-dom";
import TicketService from "../../services/TicketService";

const ListTickets = () => {
  // const [str, setStr] = useState("");
  // const [dispTicket, setDispTicket] = useState(tickets);
  const [dispTicket, setDispTicket] = useState([]);

  // useEffect(() => {}, [str, dispTicket]);
  useEffect(() => {
    getAllTickets();
  }, []);

  const getAllTickets = () => {
    TicketService.getTickets()
      .then((response) => {
        setDispTicket(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleOnChange = (e) => {
  //   const { value } = e.target;
  //   setStr(value);
  //   searchTicket(value);
  // };

  // const searchTicket = (sttr) => {
  //   const displayTickets = tickets.filter((row) =>
  //     row.subject.toLowerCase().includes(sttr.toLowerCase())
  //   );
  //   setDispTicket(displayTickets);
  // };

  return (
    <Container>
      <Row>
        {/* <Col>
          <Breadcrumb page="Ticket Lists" />
        </Col> */}
        <h2 className="text-info text-center">Tickets List</h2>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link
            to={`/_addTicket&ticketAdd=${"add"}`}
            className="btn btn-primary mb-2"
          >
            New Ticket
          </Link>
        </Col>
        <Col className="text-right">
          {/* <SearchForm handleOnChange={handleOnChange} str={str} /> */}
        </Col>
      </Row>
      <hr />
      <Col>
        <TicketTable tickets={dispTicket} handleOnDelete={getAllTickets} />
      </Col>
    </Container>
  );
};

export default ListTickets;
