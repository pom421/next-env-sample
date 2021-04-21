import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <h1>Tests variables</h1>

    <h2>ENV</h2>
    <p>VAR_ENV = {process.env.VAR_ENV}</p>
    <p>NEXT_PUBLIC_VAR_ENV = {process.env.NEXT_PUBLIC_VAR_ENV}</p>

    <h2>ENV LOCAL</h2>
    <p>VAR_LOCAL = {process.env.VAR_LOCAL}</p>
    <p>NEXT_PUBLIC_VAR_LOCAL = {process.env.NEXT_PUBLIC_VAR_LOCAL}</p>

    <h2>ENV DEV</h2>
    <p>VAR_DEV = {process.env.VAR_DEV}</p>
    <p>NEXT_PUBLIC_VAR_DEV = {process.env.NEXT_PUBLIC_VAR_DEV}</p>

    <h2>ENV PROD</h2>
    <p>VAR_PROD = {process.env.VAR_PROD}</p>
    <p>NEXT_PUBLIC_VAR_PROD = {process.env.NEXT_PUBLIC_VAR_PROD}</p>


    <h2>SHARED</h2>
    <p>VAR_SHARED = {process.env.VAR_SHARED}</p>
    <p>NEXT_PUBLIC_VAR_SHARED = {process.env.NEXT_PUBLIC_VAR_SHARED}</p>

    </div>
  )
}

export async function getServerSideProps(context) {

  console.log("VAR_ENV", process.env.VAR_ENV)
  console.log("NEXT_PUBLIC_VAR_ENV", process.env.NEXT_PUBLIC_VAR_ENV)
  console.log("VAR_LOCAL", process.env.VAR_LOCAL)
  console.log("NEXT_PUBLIC_VAR_LOCAL", process.env.NEXT_PUBLIC_VAR_LOCAL)
  console.log("VAR_DEV", process.env.VAR_DEV)
  console.log("NEXT_PUBLIC_VAR_DEV", process.env.NEXT_PUBLIC_VAR_DEV)
  console.log("VAR_PROD", process.env.VAR_PROD)
  console.log("NEXT_PUBLIC_VAR_PROD", process.env.NEXT_PUBLIC_VAR_PROD)
  console.log("VAR_SHARED", process.env.VAR_SHARED)
  console.log("NEXT_PUBLIC_VAR_SHARED", process.env.NEXT_PUBLIC_VAR_SHARED)

  return { props: {}}

}