import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-red-200 text-4xl pb-4">Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default NoMatch;