import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {

    return (
        <>
            <footer>
                <p>footer</p>
                <Link href="/" className="">Top</Link>/
                <Link href="/promotions" className="">promotions</Link>/
                <Link href="/mypage" className="">mypage</Link>
            </footer>
        </>
    )
}
