
import Head from 'next/head'
import { GetStaticProps } from 'next'

import unfetch from "isomorphic-unfetch";

interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  }
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  }
}


export default function Home ({ user }) {
  return (
    <>
      <Head>
        <title>Responsive Chat</title>
      </Head>

      <div className="main">
        <main>
          {user.name.first}
        </main>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/randomUser')

  const data = await response.json();

  const user: User = data.results[0];

  return {
    props: {
      user
    },
    revalidate: 2
  }
}
