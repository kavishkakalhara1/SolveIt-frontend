import Sidebar from '../components/Sidebar';

function Home() {
  return (
    <div className="flex">
    <Sidebar />
    <div className="flex-grow flex justify-center items-center h-screen">
      <h1 className="text-4xl">Welcome to SolveIt</h1>
    </div>
  </div>
  );
}

export default Home;