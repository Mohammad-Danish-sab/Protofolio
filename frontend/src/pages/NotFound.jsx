import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      text-center
      px-6
    "
    >
      <h1
        className="
        text-[120px]
        font-black
        text-orange-500
      "
      >
        404
      </h1>

      <p className="text-white/60 text-xl mb-6">Page not found</p>

      <Link
        to="/"
        className="
        bg-orange-500
        px-6
        py-3
        rounded-full
        font-bold
      "
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
