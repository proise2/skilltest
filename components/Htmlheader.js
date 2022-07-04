import Head from 'next/head'

const Htmlheader = ({ title }) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name='keywords' content='web development, product advocate' />
    </Head>
  )
}

export default Htmlheader
