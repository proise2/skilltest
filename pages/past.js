import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const past = () => {
  return (
    <div className={styles.container}>
      <Htmlheader title='Past' />
      <h2> Reflection on past experience:</h2>
      <p>a. In your next role, what are you looking to <b>learn<b/> or do <b>more of?</b></p>
      <p> Which (non-Vercel) technical or sales article, guide or lightning talk left the biggest positive
<b>impression</b> on you?<b>Why?</b> (and please provide the link)</p>
</p>
      <div className={styles.link}><Link href='/redirect'>Lets try using Next.js</Link></div>
    </div>
  )
}

export default past
