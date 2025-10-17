import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const category = use(categoryPromise);

  return (
    <div>
      <h1 className="font-bold">All Categories({category.length})</h1>

      <div className="grid grid-cols-1 mt-5 gap-2">
        {category.map((cate) => (
          <NavLink key={cate.id} className="btn bg-base-100 border-0 hover font-semibold text-accent hover:bg-base-200" to={`/category/${cate.id}`}>{cate.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
