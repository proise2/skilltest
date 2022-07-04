import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const past = () => {
  return (
    
    <div className={styles.container}>
      <Htmlheader title='Past' />
      <h2> Reflection on past experience:</h2>
      <p> <b>a. In your next role, what are you looking to learn or do more of? </b></p>
        <p> I'm looking to learn more about the products that I'm selling and how they can be used in different industries. I also want to continue developing my sales skills and learn more about how to close deals.</p>
      <p> <b> b. Which (non-Vercel) technical or sales article, guide or lightning talk left the biggest positive impression on you? Why? (and please provide the link) </b></p>
<p>I really enjoyed a technical talk by Rich Hickey called "Simple Made Easy." He talked about how we tend to overcomplicate things and how we can make our lives easier by keeping things simple. I found his talk motivating and inspiring. </p>
      <div className={styles.link}><Link href='https://www.automasean.blog/simple-made-easy/'>Simple Made Easy blog</Link></div>
      <div className={styles.link}><Link href='/redirect'>Lets try using Next.js</Link></div>
    </div>
  )
}

export default past
