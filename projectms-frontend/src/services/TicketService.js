import axios from 'axios';

const TICKET_API_BASE_URL = "api/auth/tickets";

class TicketService {

    getTickets() {
        return axios.get(TICKET_API_BASE_URL);
    }

    createTicket(ticket) {
        return axios.post(TICKET_API_BASE_URL, ticket);
    }

    getTicketById(ticketId) {
        return axios.get(TICKET_API_BASE_URL + '/' + ticketId);
    }

    updateTicket(ticketId, ticket) {
        return axios.put(TICKET_API_BASE_URL + '/' + ticketId, ticket);
    }

    deleteTicket(ticketId) {
        return axios.delete(TICKET_API_BASE_URL + '/' + ticketId);
    }
}

export default new TicketService();