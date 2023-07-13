import React from "react";
import Friends from "@widgets/Friends";
import Posts from "@widgets/Posts";
import Profile from "@widgets/Profile";

function Home() {
  return (
    <main className="home">
      <section className="leftSection">
        <Profile />
      </section>
      <section className="middleSection">
        <Posts />
      </section>
      <section className="rightSection">
        <Friends />
      </section>
    </main>
  );
}

export default Home;
