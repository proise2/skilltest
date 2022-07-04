import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const past = () => {
  return (
    <div className={styles.container}>
      <Htmlheader title='Past' />
      <h2> Reflection on past experience:</h2>
      <p> a. In your next role, what are you looking to learn or do more of?</p>
      <p> Which (non-Vercel) technical or sales article, guide or lightning talk left the biggest positive impression on you? Why? (and please provide the link)</p>

      <div className={styles.link}><Link href='/redirect'>Lets try using Next.js</Link></div>
    </div>
  )
}

export default past
