import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TicketForm from "./addticketform/TicketForm";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  details: "",
};

const CreateTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);

  useEffect(() => {}, [frmData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Form submit request received", frmData);
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
          <TicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CreateTicket;
