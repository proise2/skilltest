import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Htmlheader title='Skills Test' />
      <h1>Dawn Jama</h1>
  <p> Hi, I'm a former teacher and aspiring product advocate.</p>
<p> This portfolio is built with <b>Next.js </b> and will showcase my skill test for a product advocate role.</p>



 <Link href='/product'>Lets Get Started</Link>

                  
      <Link href='/product'>Lets Get Started</Link>

   </div>
                    
  )
}
