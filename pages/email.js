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
<p><b>Please include one email response for each inquiry, just as if you were responding to a customer.</b></p>
<p><b>Sales Inquiry:</b> Do I need Enterprise? </p>
<p><b>Subject:</b> Sales Lead for barnesandnoble.com</p>
<p><b>Name:</b> Joe Fox</p>
<p><b>Employees:</b> 1000+</p>
<p>How can we help you: New site launching soon using Next.js and we are thinking about using Vercel
to host. I would like more information about the Enterprise option.</p>
 </li>
<li><p>There are a few things to consider when choosing a hosting provider for your next project. Vercel has a lot of great features, but it's important to make sure that the provider has the resources and capabilities to support your project. </p>

<p>Next.js is a great choice for a new site - it's easy to use and provides a lot of flexibility. Vercel is also a great option for hosting Next.js projects, as we have the resources and experience to support them.</p>
</li>   
</ul>

      <div className={styles.link}><Link href='/recommendations'>Lets move on to the next question</Link>
    </div>
  )
}

export default email
