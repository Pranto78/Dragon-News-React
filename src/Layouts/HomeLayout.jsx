import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";

const HomeLayout = () => {
  return (
    <div>
      <header></header>
      <main>
        <section className="left_nav">
            <Header></Header>
        </section>
        <section className="main">
            <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
