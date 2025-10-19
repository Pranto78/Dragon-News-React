import React from 'react';
import { Link } from 'react-router';

const DetailsNews = ({news}) => {
    console.log(news)
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-4">
        {/* News Image */}
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="w-full object-cover rounded-md mb-4"
        />

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h2>

       

        {/* Details */}
        <p className="text-gray-700 mb-6 leading-relaxed">{news.details}</p>

        

        {/* Footer */}
        <div className="flex justify-start mt-6">
          <Link
            to={`/category/${news.category_id}`}
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-4 py-2 rounded-md"
          >
            ← All news in this category
          </Link>
        </div>
      </div>
    );
};

export default DetailsNews;