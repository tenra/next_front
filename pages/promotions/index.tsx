import { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from "@tanstack/react-query";
import { Promotion } from 'models';

interface PromotionsPageProps {
    promotions: Promotion[]
}

const PromotionsPage: NextPage<PromotionsPageProps> = ({ promotions }) => {

    const [page, setPage] = useState(1);

    const fetchPosts = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/promotions`);
        return res.json();
    }

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData
    } = useQuery(['posts', page], () => fetchPosts());

    if (isLoading) {
        return <div className="loader"></div>
    }

    if (!data) {
        return <p>can not fetch posts</p>
    }

    console.log(data)

    return (
        <>
            {data?.map((promotion: any, index: number) => {
            return (
                <div key={index}>
                <p>{promotion.id}</p>
                <p>{promotion.title}</p>
                <p>{promotion.content}</p>
                </div>
            )
            })}
        </>
    )
}

export default PromotionsPage;
