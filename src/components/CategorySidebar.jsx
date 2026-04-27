import Link from "next/link";

const CategorySidebar = ({ categories }) => {
  return (
    <div className="w-1/4 p-4 border-r">
      <h2 className="text-xl font-bold mb-4">Categories</h2>

      {categories?.map((cat) => (
        <Link key={cat.id} href={`/?category=${cat.id}`}>
          <p className="mb-2 cursor-pointer hover:text-blue-500">
            {cat.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default CategorySidebar;