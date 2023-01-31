import { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from "@tanstack/react-query";
import { Post } from 'models';

interface PostsPageProps {
    posts: Post[]
}

const PostsPage: NextPage<PostsPageProps> = ({ posts }) => {

    const [page, setPage] = useState(1);

    const fetchPosts = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts`);
        return res.json();
    }

    const {
        isLoading,
        isError,
        error,
        data: posts_data,
        isFetching,
        isPreviousData
    } = useQuery(['posts', page], () => fetchPosts(), { keepPreviousData: true });

    if (isLoading) {
        return <div className="loader"></div>
    }

    if (!posts_data) {
        return <p>can not fetch posts</p>
    }

    console.log(posts_data)

    return (
        <>
            {posts_data?.map((post: any, index: number) => {
            return (
                <div key={index}>
                <p>{post.id}</p>
                <p>{post.title}</p>
                <p>{post.content}</p>
                </div>
            )
            })}
        </>
    )
}

export default PostsPage;
