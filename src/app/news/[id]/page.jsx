import Image from "next/image";
import { notFound } from "next/navigation";

// get single news
const getNewsDetailsById = async (id) => {
  const res = await fetch("http://localhost:5000/news", {
    cache: "no-store",
  });

  const data = await res.json();

  const newsArray = data.news || data;

  return newsArray.find(
    (item) => String(item.id) === String(id)
  );
};

// metadata
export async function generateMetadata({ params }) {
  const news = await getNewsDetailsById(params.id);

  return {
    title: news?.title || "News Details",
    description: news?.details || "",
  };
}

const NewsDetailsPage = async ({ params }) => {
  const news = await getNewsDetailsById(params.id);

  if (!news) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">

      <h1 className="text-3xl font-bold mb-4">
        {news.title}
      </h1>

      <div className="relative w-full h-100 mb-6">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex justify-between text-sm text-gray-600 mb-4">
        <p>Author: {news.author?.name}</p>
        <p>Views: {news.total_view}</p>
      </div>

      <p className="text-gray-700 leading-relaxed">
        {news.details}
      </p>

      <div className="mt-6 text-sm text-gray-500">
        <p>Rating: {news.rating} ⭐</p>
        <p>Published: {news.author?.published_date}</p>
      </div>

    </div>
  );
};

export default NewsDetailsPage;