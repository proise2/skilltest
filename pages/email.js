import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const email = () => {
  return (
    <div className={styles.container}>
      <Htmlheader title='Quarterly Project' />
      <h2>Imagine you are tasked with the following quarterly project: “Build a process for ensuring 90% of our paid customers add 2FA (Two-Factor Authentication)”. Spend 10 minutes outlining how you would approach this directive and execute on it.</h2>
      <ul className={styles.card_vert}>
        <li>
          <p>It would be good to first make sure we have a document listed on our customer facing FAQ that explains how to set up 2FA and the importance of having a second step for authentication and protecting your account.</p>
        </li>
        <li>
          <p>Next we would need to instruct the team on how to field questions related to customers setting up 2FA on their account and to make sure support knows how to answer customer questions on why they should add 2FA and its importance.</p>
        </li>
        <li>
          <p>We could add an alert or toast on the Vercel dashboard so when the customers login they see the alert on their screen asking them to add 2FA.</p>
        </li>
        <li>
          <p>We would then need to determine what customers have two factor authentication enabled.</p>
        </li>
        <li>
          <p>Once we have this list, we can start with an email/communication campaign explaining the importance of securing your account and how two factor authentication helps to reduce security risks.</p>
        </li>
        <li>
          <p>We would then most likely want to pull weekly reports to see how many customers are adding 2FA and how many have yet to add it.</p>
        </li>
        <li>
          <p>From here we would want to send out additional reminders to our customers asking them to add 2FA to their account.</p>
        </li>
        <li>
          <p>We should also work with the CSMs to help push customers to set up 2FA and to set proper expectations.</p>
        </li>
        <li>
          <p>If we are still not seeing a large increase in the percentage of customers adding 2FA to their accounts, we could then reach out to the customers from the support team to discuss setting up 2FA on their account. While still not being too intrusive or annoying to our customers on this initiative.</p>
        </li>
        <li>
          <p>With all of this said, I am not sure it would be a good idea to inform our customers that there is a deadline to add 2FA and that they must add this to their account, this does not seem like it would be the best approach.</p>
        </li>
      </ul>
      <div className={styles.link}><Link href='/redirect'>Lets move on to the next question</Link></div>
    </div>
  )
}

export default email
