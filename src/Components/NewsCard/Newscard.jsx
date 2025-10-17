import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view, tags } =
    news;

  return (
    <div className="card w-full bg-base-100 shadow-xl border border-gray-200">
      {/* Author Info + Share */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <div>
            <p className="font-semibold text-sm">{author?.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="flex gap-2 items-center">
          <CiBookmark size={24} className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          <FaShareAlt size={20} className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        </button>
      </div>

      {/* News Content */}
      <div className="px-4 pb-4">
        <h2 className="font-bold text-lg mb-2 hover:text-blue-600 cursor-pointer">
          {title}
        </h2>

        <figure>
          <img
            src={thumbnail_url}
            alt="news-thumbnail"
            className="rounded-xl w-full object-cover"
          />
        </figure>

        <p className="text-sm text-gray-600 mt-3">
          {details.length > 150 ? details.slice(0, 150) + "..." : details}
          <span className="text-blue-500 font-semibold cursor-pointer ml-1">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="mt-2 text-xs text-gray-500">
          <span className="font-semibold">Tags:</span>{" "}
          {tags?.map((tag, i) => (
            <span key={i} className="mr-1">
              #{tag}
            </span>
          ))}
        </div>

        {/* Rating + Views */}
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
          <div className="flex items-center text-yellow-500 gap-1">
            <FaStar />
            <span className="font-semibold">{rating?.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
