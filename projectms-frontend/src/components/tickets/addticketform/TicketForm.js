import React from 'react'
import { Form, Row, Col, Button } from "react-bootstrap"
import PropTypes from 'prop-types'

import './addticket.css'

const TicketForm = ({ handleOnSubmit, handleOnChange, frmDt }) => {
    console.log(frmDt);
    return (
        <div className="jumbotron mt-3 add-ticket bg-light">
            <h2 className='text-info text-center'>Add New Ticket</h2><hr />
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group as={Row} className="mt-3">
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name='subject'
                            value={frmDt.subject}
                            minlength='3'
                            onChange={handleOnChange}
                            placeholder='Enter Subject'
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-3">
                    <Form.Label column sm={3}>Issue Found</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type='date'
                            name='issueDate'
                            value={frmDt.issueDate}
                            onChange={handleOnChange}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-3">
                    <Form.Label column sm={3}>Details</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            as='textarea'
                            name='details'
                            rows='5'
                            value={frmDt.details}
                            onChange={handleOnChange}
                            required
                        />
                    </Col>
                </Form.Group><br />
                <div className="d-grid gap-2">
                    <Button type='submit' variant='info'>Add Ticket</Button>
                </div>
            </Form>
        </div>
    )
}

TicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired
}

export default TicketForm;
