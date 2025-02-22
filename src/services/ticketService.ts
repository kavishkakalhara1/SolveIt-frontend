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

export const fetchTickets = async (): Promise<Ticket[]> => {
  const response = await axios.get('/api/issueService/issues');
  return response.data;
};

export const fetchTicketById = async (id: string): Promise<Ticket> => {
  const response = await axios.get(`/api/issueService/issues/${id}`);
  return response.data;
};

export const createTicket = async (ticketData: Ticket): Promise<Ticket> => {
  const response = await axios.post('/api/issueService/create-issue', ticketData);
  return response.data;
};