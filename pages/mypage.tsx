import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth0 } from "@auth0/auth0-react";

interface MyPageProps {}

const MyPage: NextPage<MyPageProps> = () => {

    const { isAuthenticated, user, isLoading, logout } = useAuth0();

    if (isLoading) {
        return <div className="loader"></div>;
    }

    return (
        <>
            <div>
                <h1>MyPage</h1>
            </div>
            <div>
            {isAuthenticated ? (
                <>
                    <p>ログイン中です</p>
                    <img src={user?.picture} alt={user?.name} width={30} height={30} />
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        ログアウト
                    </button>
                </>
            ) : (
                <p>ログアウトしています</p>
            )}
            </div>
        </>
    )
}

export default MyPage;
