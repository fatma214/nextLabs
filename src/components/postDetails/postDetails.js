'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PostCard from '@/components/PostCard/PostCard';
import styles from './../../app/blog/blog.module.css';

const PostDetail = ({ post, prevPost, nextPost }) => {
    const router = useRouter();

    const handlePrevClick = () => {
        if (prevPost) {
            router.push(`/blog/${prevPost._id}`);
        }
    };

    const handleNextClick = () => {
        if (nextPost) {
            router.push(`/blog/${nextPost._id}`);
        }
    };

    return (
        <div className={styles.container}>
            <PostCard 
                title={post.title} 
                discreption={post.description} 
                publishAt={post.publishedAt} 
                image={post.urlToImage} 
            />
            <div className={styles.navigation}>
                <button onClick={handlePrevClick} disabled={!prevPost} className={styles.navButton}>
                    Previous
                </button>
                <button onClick={handleNextClick} disabled={!nextPost} className={styles.navButton}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PostDetail;
