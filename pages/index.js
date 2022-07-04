import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Htmlheader title='Skills Test' />
      <h1>Hi, My name Is Dawn Jama</h1>
      <p>I'm a former teacher and aspiring product advocate.</p>
      <p>Here you will find my attempt at the product advoate skilltest for Vercel</p>
      <Link href='/product1'>Lets Get Started</Link>
    </div>
  )
}
