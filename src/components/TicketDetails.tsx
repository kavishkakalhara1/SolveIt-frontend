import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

const TicketDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [ticket, setTicket] = useState<Ticket | null>(null);

  useEffect(() => {
    const fetchTicket = async () => {
      const response = await axios.get(`/api/issueService/issues/${id}`);
      setTicket(response.data);
    };
    fetchTicket();
  }, [id]);

  if (!ticket) return <div>Loading...</div>;

  return (
    <div>
      <h2>{ticket.title}</h2>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Type: {ticket.type}</p>
      <p>Department: {ticket.department}</p>
      <p>Reported by: {ticket.reportedby}</p>
      <p>Assigned to: {ticket.assignedto}</p>
      <p>Attachments: {ticket.attachments}</p>
      <p>Tags: {ticket.tags}</p>
      <p>Comments: {ticket.comments}</p>
    </div>
  );
};

export default TicketDetails;