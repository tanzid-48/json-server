import Image from 'next/image';
import React from 'react';

const NewsCard = ({ item }) => {
  return (
    <div className="border p-4 rounded-xl mb-4 shadow">
      <Image src={item.image} alt="news"
      width={250}
      height={200}
       className="w-full h-48 object-cover rounded" />

      <h2 className="text-lg font-bold mt-2">{item.title}</h2>

      <p className="text-sm text-gray-600 mt-1">
        {item.details.slice(0, 100)}...
      </p>

      <div className="flex justify-between mt-3 text-sm">
        <span>👁 {item.total_view}</span>
        <span>⭐ {item.rating}</span>
      </div>
    </div>
  );
};

export default NewsCard;