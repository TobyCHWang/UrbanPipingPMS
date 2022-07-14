import React from 'react'
import { Link, useParams } from "react-router-dom";
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'
import TicketService from '../../../services/TicketService';

const TicketTable = ({ tickets, handleOnDelete }) => {
    const deleteTicket = (ticketId) => {
        TicketService.deleteTicket(ticketId).then((response) => {
            handleOnDelete();
        }).catch(error => {
            console.log(error)
        })
    }
    // if(!tickets.length)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Details</th>
                    <th>Status</th>
                    <th>Opened Date</th>
                    <th>Comment</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* {tickets.length && tickets.map((row, i) => */}
                {tickets.length ? (tickets.map((row) => (
                    <tr key={row.ticketId}>
                        <td>{row.ticketId}</td>
                        <td>{row.ticketSubject}</td>
                        <td>{row.ticketDetails}</td>
                        <td>{row.ticketStatus}</td>
                        <td>{row.ticketOpenedDate}</td>
                        <td>{row.ticketComment}</td>
                        <td>
                            <Link className="btn btn-info" to={`/${row.ticketId}&ticketAdd=${"update"}`}>Update</Link>
                            <button className="btn btn-danger" onClick={() => deleteTicket(row.ticketId)} style={{ marginLeft: "10px" }}>Delete</button>
                        </td>
                    </tr>
                ))
                ) : (
                    <tr>
                        <td colSpan="7" className="text-center">No tickets to show</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

TicketTable.propTypes = {
    tickets: PropTypes.array.isRequired
}

export default TicketTable;
