import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to SolveIt</h1>
      <p className="mb-8">Your one-stop solution for issue tracking and management.</p>
      <div className="space-x-4">
        <Link to="/sign-in" className="bg-blue-600 text-white px-4 py-2 rounded">Sign In</Link>
        <Link to="/sign-up" className="bg-green-600 text-white px-4 py-2 rounded">Sign Up</Link>
      </div>
    </div>
  );
}

export default Home