import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
      <div className="text-lg font-bold">SolveIt</div>
        <div>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/sign-in" className="mx-2">Sign In</Link>
          <Link to="/sign-up" className="mx-2">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;