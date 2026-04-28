import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center text-center bg-black text-white">

      <h1 className="text-5xl font-bold text-red-500 mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-2">
        News Not Found
      </h2>

      <p className="text-gray-400 mb-6">
        Sorry, this news article does not exist.
      </p>

      <Link href="/">
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          ⬅ Back to Home
        </button>
      </Link>

    </div>
  );
};

export default NotFound;