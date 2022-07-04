import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const recommendations = () => {
  return (
    <div className={styles.container}>
      <Htmlheader title='Personal Recommendations' />
      <h2>When it comes to looking for a solution for hosting your Next.js site, what are some of the common things
you would value as the Engineering Manager for:</h2>
      <p>1. A mom and pop business? </p>
      <p>2. An NFT?</p>
      <p>3. A Marketing Page for a large corporation like Nintendo</p>
      <div className={styles.link}><Link href='/index'>Back to home</Link></div>
    </div>
  )
}

export default recommendations
