import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Htmlheader title='Skills Test' />
      <h1>Dawn Jama</h1>
      <p>Skill test for product advocate role</p>
      <Link href='/focus'>Lets Get Started</Link>
    </div>
  )
}
