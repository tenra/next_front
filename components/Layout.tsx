import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const Layout = (props: any) => {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false, //リクエストに失敗した場合に何回まで再リクエストを送るか
                refetchOnWindowFocus: true, //window.focus時に再取得を行うかどうか
                staleTime: 300000, //再取得する間隔の指定。デフォルトでは0なので注意。ミリ秒で指定
            },
        },
    })

    return (
        <>
            <div>
                <header>
                    <Link href="/" className="">Top</Link>/
                    <Link href="/posts" className="">posts</Link>/
                    <Link href="/mypage" className="">mypage</Link>
                </header>
                <main>
                    <QueryClientProvider client={queryClient} contextSharing={true}>
                        {props.children}
                    </QueryClientProvider>
                </main>
                <footer>footer</footer>
            </div>
        </>
    )
}

export default Layout
