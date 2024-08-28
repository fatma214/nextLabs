import React from 'react';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import PostDetail from '@/components/postDetails/postDetails';

const Page = async ({ params }) => {
    const client = await clientPromise;
    const db = client.db('nexttest');

     
    const allPosts = await db.collection('news').find({}).toArray();
    const post = await db.collection('news').findOne({ _id: new ObjectId(params.id) });
 
    post._id = post._id.toString();

 
    allPosts.forEach(p => p._id = p._id.toString());
    allPosts.sort((a, b) => a._id.localeCompare(b._id));

    const currentIndex = allPosts.findIndex(p => p._id === params.id);
    const prevPost = allPosts[currentIndex - 1] || null;
    const nextPost = allPosts[currentIndex + 1] || null;

    if (prevPost) prevPost._id = prevPost._id.toString();
    if (nextPost) nextPost._id = nextPost._id.toString();

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <PostDetail 
            post={post} 
            prevPost={prevPost} 
            nextPost={nextPost} 
        />
    );
};

export default Page;
