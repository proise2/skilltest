import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const email = () => {
  return (
    <div className={styles.container}>
      <Htmlheader title='Email Recommendations' />
      <h2>Practice Email Responses</h2>
      <ul className={styles.card_vert}>
        <li>
          <p>Please include one email response for each inquiry, just as if you were responding to a customer.</p>
        </li>
        <li>
<P><b>Please include one email response for each inquiry, just as if you were responding to a customer.</b>
<P><b>Sales Inquiry:</b> Do I need Enterprise? 
<P><b>Subject:</b> Sales Lead for barnesandnoble.com
<P><b>Name:</b> Joe Fox
<P><b>Employees:</b> 1000+
<P>How can we help you: New site launching soon using Next.js and we are thinking about using Vercel
to host. I would like more information about the Enterprise option.
 </li>
      </ul>
<p>
      <div className={styles.link}><Link href='/recommendations'>Lets move on to the next question</Link></div>
    </div>
  )
}

export default email
