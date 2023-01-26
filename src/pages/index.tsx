
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'

import { ChatHeader } from "@/components/ChatHeader";

export default function Home() {
  return (
    <>
      <Head>
        <title>Responsive Chat</title>
      </Head>

      <div className="main">
        <ChatHeader />

        <main>
          content
        </main>
      </div>
    </>
  )
}
