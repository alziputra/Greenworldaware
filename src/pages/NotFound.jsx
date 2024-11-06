import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center font-bold h-screen">
      <h1 className="text-4xl">Oops!</h1>
      <p className="font-mono text-xl">404 Not found</p>
      <Link to="/" className="rounded bg-green-500 px-2 text-white hover:bg-green-600 active:bg-green-700 transition-all">
        Go Home!
      </Link>
    </div>
  );
}

export default NotFound;
