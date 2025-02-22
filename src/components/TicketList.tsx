import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Ticket {
  issueid: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  type: string;
  department: string;
  reportedby: string;
  assignedto: string;
  attachments: string;
  tags: string;
  comments: string;
}

const TicketList = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await axios.get('/api/issueService/issues');
      setTickets(response.data);
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h2>Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.issueid}>
            <Link to={`/tickets/${ticket.issueid}`}>{ticket.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;