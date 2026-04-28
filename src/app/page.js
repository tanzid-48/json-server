import { GetCategories, GetNews } from "@/lib/data";
import CategorySidebar from "@/components/CategorySidebar";
import NewsCard from "@/components/NewsCard";

export default async function Home({ searchParams }) {
  const categoryData = await GetCategories();
  const newsData = await GetNews();

  const categories = categoryData?.categories || categoryData || [];
  const news = newsData?.news || newsData || [];

  const selectedCategory = searchParams?.category;

  const filteredNews = selectedCategory
    ? news.filter(
        (n) => String(n.category_id) === String(selectedCategory)
      )
    : news;

  return (
    <div className="flex max-w-7xl mx-auto mt-6">

      <CategorySidebar categories={categories} />

      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">
          News ({filteredNews.length})
        </h2>

        {filteredNews.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
}
