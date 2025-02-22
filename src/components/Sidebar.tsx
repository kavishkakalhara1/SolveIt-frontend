import { Link } from 'react-router-dom';
import { FaHome, FaTicketAlt, FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar bg-blue-600 text-white w-64 h-screen p-4">
      <div className="text-2xl font-bold mb-6">SolveIt</div>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="flex items-center p-2 rounded hover:bg-blue-500">
            <FaHome className="mr-2" /> Home
          </Link>
        </li>
        <li>
          <Link to="/tickets" className="flex items-center p-2 rounded hover:bg-blue-500">
            <FaTicketAlt className="mr-2" /> Tickets
          </Link>
        </li>
        <li>
          <Link to="/create-ticket" className="flex items-center p-2 rounded hover:bg-blue-500">
            <FaPlus className="mr-2" /> Create Ticket
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;