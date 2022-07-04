import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Htmlheader title='Skills Test' />
      <h1>Hello My Name Is Nicholas Houston</h1>
      <p>For your consideration, please follow me through the following questions and scenerios.</p>
      <Link href='/focus'>Lets Get Started</Link>
    </div>
  )
}
