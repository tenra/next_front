import { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth0 } from "@auth0/auth0-react";

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {

  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div>
        <h1>Top Page</h1>
        <button onClick={() => loginWithRedirect()}>ログイン</button>
      </div>
    </>
  )
}

export default Home;
