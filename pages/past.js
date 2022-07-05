import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const past = () => {
  return (
    
    <div className={styles.container}>
      <Htmlheader title='Past' />
      <h2> Reflection on past experience:</h2>
      <p><h4> <b>In your next role, what are you looking to learn or do more of? </b></p> </h4>
      <p> I want to learn how to better identify and approach potential clients and how to build rapport with them. I'm looking to learn more about the products that I'm selling and how they can be used in different industries.</p>  
      <p> I'm also looking to learn how to: </p>
       <p> Deliver presentations to a wide range of audiences </p>
      <p> Identify opportunities for growth in the market and with specific customers </p>
      <p>The opportunity to create a clear customer journey map to help on the discussion </p>
      <p>I also want to continue developing my sales skills and learn more about how to close deals.</p>
      <p><h4><b> b. Which (non-Vercel) technical or sales article, guide or lightning talk left the biggest positive impression on you? Why? (and please provide the link) </b></p> </h4>
<p>I really enjoyed a technical talk by Rich Hickey called "Simple Made Easy." </p>
      <p>He talked about how we tend to overcomplicate things and how we can make our lives easier by keeping things simple. </p>
      <p>I found his talk motivating and inspiring. </p>
      <div className={styles.link}><Link href='https://www.automasean.blog/simple-made-easy/'>Simple Made Easy blog</Link></div>
      <div className={styles.link}><Link href='/redirect'>Lets try using Next.js</Link></div>
    </div>
  )
}

export default past
