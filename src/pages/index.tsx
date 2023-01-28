
import Head from 'next/head'
import { GetStaticProps } from 'next'

import unfetch from "isomorphic-unfetch";


export default function Home ({ data }) {
  return (
    <>
      <Head>
        <title>Responsive Chat</title>
      </Head>

      <div className="main">
        <main>
          {
            data.map((todo: Todo) => (
              <div key={todo.id}>
                { todo.title }
              </div>
            ))
          }
        </main>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/randomUser')

  const data = await response.json();

  console.log(data)

  return {
    props: {
      data: data.results
    },
    revalidate: 2
  }
}
