import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import RightAside from "../Components/layoutHome/RightAside";
import { useLoaderData, useParams } from "react-router";
import DetailsNews from "../Components/DetailsNews/DetailsNews";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails)
  }, [data,id]);
  return (
    <div className="w-11/12 mx-auto">
      <header className="py-5">
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
            <h2 className="text-xl font-bold">News Details</h2>
            <DetailsNews news={news}></DetailsNews>
            </div>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
