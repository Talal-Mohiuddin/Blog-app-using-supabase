import React from "react";
import { PostGrid } from "./index.js";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/Context.jsx";

const HomePosts = () => {
  const { getblogs } = useAuth();
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getblogs,
  });

  if (isLoading)
    return (
      <div>
        <PostGrid isLoading={isLoading} />
        <PostGrid isLoading={isLoading} />
        <PostGrid isLoading={isLoading} />
      </div>
    );

  const featuredPosts = () => {
    let randomposts = [];
    for (let index = 0; index < 3; index++) {
      let randomindex = Math.floor(Math.random() * blogs?.length);
      if (randomposts.includes(blogs[randomindex]))
        randomindex = Math.floor(Math.random() * blogs?.length);
      randomposts.push(blogs[randomindex]);
    }
    return randomposts;
  };

  const buyingGuide = () => {
    let buyingkeywords = ["Best", "Top", "Favourite"];
    let shuffledBlogs = blogs?.sort(() => Math.random() - 0.5);
    let buyingsposts = shuffledBlogs?.filter((blog) =>
      buyingkeywords.some((keyword) =>
        (blog.title + " " + blog.content).includes(keyword)
      )
    );
    return buyingsposts?.slice(0, 6);
  };

  const newposts = () => {
    let posts = blogs?.sort((a, b) => a.time - b.time);
    return posts.slice(0, 9);
  };

  const buying = buyingGuide();
  const featured = featuredPosts();
  const newpost = newposts();

  return (
    <div>
      <PostGrid isLoading={isLoading} showposts={featured} type="featured" />
      <PostGrid isLoading={isLoading} showposts={buying} type="buying" />
      <PostGrid isLoading={isLoading} showposts={newpost} type="latest" />
    </div>
  );
};

export default HomePosts;
