import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
    priority: '',
    type: '',
    department: '',
    reportedby: '',
    assignedto: '',
    attachments: '',
    tags: '',
    comments: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('/api/issueService/create-issue', formData);
      alert('Ticket created successfully');
    } catch (error) {
      alert('Failed to create ticket');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input name="status" placeholder="Status" onChange={handleChange} />
      <input name="priority" placeholder="Priority" onChange={handleChange} />
      <input name="type" placeholder="Type" onChange={handleChange} />
      <input name="department" placeholder="Department" onChange={handleChange} />
      <input name="reportedby" placeholder="Reported By" onChange={handleChange} />
      <input name="assignedto" placeholder="Assigned To" onChange={handleChange} />
      <input name="attachments" placeholder="Attachments" onChange={handleChange} />
      <input name="tags" placeholder="Tags" onChange={handleChange} />
      <textarea name="comments" placeholder="Comments" onChange={handleChange} />
      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default TicketForm;