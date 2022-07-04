import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Htmlheader title='Skills Test' />
      <h1>Hi, My name Is Dawn Jama</h1>
<p><img src="https://pbs.twimg.com/profile_images/1496880979482349570/kvrdCaGn_400x400.jpg" alt="Dawn Jama" width="500" height="600"></p>
      <p>I'm a former teacher and aspiring product advocate.</p>
      <p>Here you will find my attempt at using Vercel to create a project.</p>
      <p> Using the links below to see my answers for the product adovcate skilltest for Vercel.</p>
      <Link href='/product1'>Lets Get Started</Link>
    </div>
  )
}
