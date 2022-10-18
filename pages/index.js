import Head from 'next/head'
import ListContent from '../component/ListContent'
import ListHeader from '../component/ListHeader'


export default function Home() {
  return (
    <>
      <Head>
        <title>Career List</title>
        <meta name="description" content="career list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ListHeader />
      <ListContent />

    </>
  )
}
