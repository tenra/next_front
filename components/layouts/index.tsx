import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from 'components/layouts/Header';
import { Footer } from 'components/layouts/Footer';
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
                <Header />
                <main>
                    <QueryClientProvider client={queryClient}>
                        {props.children}
                    </QueryClientProvider>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
