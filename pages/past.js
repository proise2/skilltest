import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const past = () => {
  return (
    
    <div className={styles.container}>
      <Htmlheader title='Past' />
      <h2> Reflection on past experience:</h2>
      <h4>In your next role, what are you looking to learn or do more of?</h4>
      <p> I want to learn how to better identify and approach potential clients and how to build rapport with them. I'm looking to learn more about the products that I'm selling and how they can be used in different industries. I also want to develop my sales skills and learn more about how to close deals.</p>  
      <p> I'm also looking to learn how to: </p>
      <p> Deliver presentations to a wide range of audiences, identify opportunities for growth in the market and with specific customers, and the opportunity to create a clear customer journey map to help on a discussion. </p>
      <h4> Which (non-Vercel) technical or sales article, guide or lightning talk left the biggest positive impression on you? Why? (and please provide the link) </h4>
      <p> I really enjoyed a technical talk by Rich Hickey called "Simple Made Easy." </p>
      <p> He talked about how we tend to overcomplicate things and how we can make our lives easier by keeping things simple. </p>
      <p>  Simplicity is often misunderstood as meaning "easy," when in fact it is the opposite of "complex." The benefits of simplicity include flexibility, ease of understanding, and ease of debugging. Hickey recommends choosing simple tools and writing simple code in order to achieve simplicity. </p>
     <p> I found his talk motivating and inspiring because it made me want to simplify my life. Now that I am tackling the possibility of being considered as a product advocate, I want to focus on the essentials and remind myself I can learn. </p>
    <p>  <div className={styles.link}><Link href='https://www.automasean.blog/simple-made-easy/'>Simple Made Easy blog</Link></div> </p>
    <p>  <div className={styles.link}><Link href='/redirect'>Lets try using Next.js</Link></div> </p>
    </div>
  )
}

export default past
