import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header: React.FC = () => {

    return (
        <>
            <header>
                <Link href="/" className="">Top</Link>/
                <Link href="/promotions" className="">promotions</Link>/
                <Link href="/mypage" className="">mypage</Link>
            </header>
        </>
    )
}
