import React from "react";
import style from "./blog.module.css";
import PostCard from "./../../components/PostCard/PostCard";
import Link from "next/link";
import clientPromise from "@/lib/mongodb";

const Blog = async () => {
  const client = await clientPromise;
  const db = client.db("nexttest");
  const news = await db.collection("news").find({}).toArray();

  return (
    <>
      <div className={style.postContainer}>
        {news.reverse().map((item) => (
          <Link key={item._id} href={`/blog/${item._id}`}>
            <PostCard
              title={item.title}
              discreption={item.description}
              image={item.urlToImage}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blog;
