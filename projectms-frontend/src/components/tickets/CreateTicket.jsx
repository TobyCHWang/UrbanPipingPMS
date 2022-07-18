import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import TicketService from "../../services/TicketService";

const CreateTicket = () => {
  const [ticketSubject, setSubject] = useState("");
  const [ticketDetails, setDetails] = useState("");
  const [ticketStatus, setStatus] = useState("Open");
  const [ticketOpenedDate, setOpenedDate] = useState("");
  const [ticketComment, setComment] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const saveOrUpdateTicket = (e) => {
    e.preventDefault();

    const ticket = {
      ticketSubject,
      ticketDetails,
      ticketStatus,
      ticketOpenedDate,
      ticketComment,
    };

    if (id != "_addTicket") {
      console.log(id);
      TicketService.updateTicket(id, ticket)
        .then((response) => {
          navigate(`/tickets`);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      TicketService.createTicket(ticket)
        .then((response) => {
          console.log(response.data);
          navigate(`/tickets`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    TicketService.getTicketById(id)
      .then((response) => {
        setSubject(response.data.ticketSubject);
        setDetails(response.data.ticketDetails);
        setStatus(response.data.ticketStatus);
        setOpenedDate(response.data.ticketOpenedDate);
        console.log(typeof response.data.ticketOpenedDate);
        setComment(response.data.ticketComment);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id != "_addTicket") {
      console.log(id);
      return <h2 className="text-info text-center">Update Ticket</h2>;
    } else {
      return <h2 className="text-info text-center">Add New Ticket</h2>;
    }
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
          <div className="jumbotron mt-3 bg-light">
            {title()}
            <hr />
            <Form autoComplete="off" onSubmit={saveOrUpdateTicket}>
              <Form.Group as={Row} className="mt-3">
                <Form.Label column sm={3}>
                  Subject
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    name="ticketSubject"
                    minLength="3"
                    value={ticketSubject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter Subject"
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mt-3">
                <Form.Label column sm={3}>
                  Issue Found
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="date"
                    name="ticketOpenedDate"
                    value={ticketOpenedDate}
                    onChange={(e) => setOpenedDate(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mt-3">
                <Form.Label column sm={3}>
                  Details
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    as="textarea"
                    name="ticketDetails"
                    rows="5"
                    value={ticketDetails}
                    onChange={(e) => setDetails(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mt-3">
                <Form.Label column sm={3}>
                  Status
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    name="ticketStatus"
                    value={ticketStatus}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mt-3">
                <Form.Label column sm={3}>
                  Comment
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    as="textarea"
                    name="ticketComment"
                    rows="5"
                    value={ticketComment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <br />
              <div className="d-grid gap-2">
                <Col>
                  <Button type="submit" variant="info">
                    Save
                  </Button>
                  <Link to="/tickets" className="btn btn-danger">
                    Cancel
                  </Link>
                </Col>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateTicket;
