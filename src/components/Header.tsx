import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import { RootState } from '../redux/store.js';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const handleSignOut = () => {
    dispatch(signoutSuccess());
  };


  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
      <div className="text-2xl ml-2 font-bold">SolveIt</div>
        <div>
          <Link to="/" className="mx-2">Home</Link>
          {user ? (
            <button onClick={handleSignOut} className="mx-2">Sign Out</button>
          ) : (
            <>
              <Link to="/sign-in" className="mx-2">Sign In</Link>
              <Link to="/signup" className="mx-2">Sign Up</Link>
            </>
          )}</div>
      </nav>
    </header>
  );
}

export default Header;