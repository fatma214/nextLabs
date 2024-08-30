import PostCard from '@/components/PostCard/PostCard';
import clientPromise from '@/lib/mongodb';
import React from 'react';

const Post = async () => {
  const client = await clientPromise;
  const db = client.db("nexttest");
  const posts = await db.collection("posts").find({}).toArray();
  console.log(posts);

  return (
    <>
      {
        posts.map((item) => (
          <PostCard 
            key={item._id} 
            title={item.title} 
            description={item.description}
            publishAt={item.publishAt || 'Unknown Date'}
            image={item.image || '/default-image.jpg'} // Default image if none provided
          />
        ))
      }
    </>
  );
};

export default Post;
