import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">SolveIt</div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/sign-in" className="hover:underline">Sign In</Link>
          <Link to="/sign-up" className="hover:underline">Sign Up</Link>
          <button onClick={toggleTheme} className="bg-gray-800 text-white px-2 py-1 rounded">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;