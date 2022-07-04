import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const product1 = () => {
  return (
    <div className={styles.container}>
      <Htmlheader title='Next Quarters Focus' />
      <h2> Things a Product Advocate Might Do: </h2>
<p>Here are the things a product advocate at Vercel might do in no particular order. List the 3 things you would be most interested in doing and the 3 you would be least interested in doing </p>
      <h3>Top 3 Tasks</h3>
      <ul className={styles.card}>
        <li>
          <h4>Write direct and concise emails that dig into a prospect's pain points and needs</h4>
          <p>Email is a powerful tool for sales professionals, but it's important to use it effectively. </p>
  <p>Direct and concise emails that dig into a prospect's pain points and needs are more likely to get a response than long, rambling messages. By focusing on the needs of the prospect, you can create a connection and build trust, which can lead to a sale.</p>
<p>This also helps to ensure that the prospect understands what you are offering and why they should consider your product or service.</p>
        </li>
        <li>
          <h4>Hop on a Zoom call to qualify a prospect or educate them about Vercel</h4>
          <p>There are a few reasons it's important to hop on a Zoom call to qualify a prospect or educate them about Vercel. 
<p>First, it's a great way to get to know the prospect and see if they're a good fit for Vercel. </p> 
<p>Second, it's a great way to educate prospects on the features and benefits of Vercel so they can make an informed decision about whether or not to sign up.</p>
        </li>
        <li>
          <h4>Attend weekly enablement meetings to level up your product and sales knowledge</h4>
          <p>Enablement meetings are important because they provide an opportunity for you to learn about new products and sales techniques. By attending these meetings, you can stay up-to-date on the latest changes and developments in your industry. </p>
<p> This will help you to better serve your customers and sell your products.</p>
        </li>
        </ul>
      <h3>Bottom 3 Tasks</h3>
      <ul className={styles.card}>
        <li>
          <h4>Create Salesforce reports to keep track of data pertinent to the team or your stats</h4>
          <p>Salesforce reporting can seem like a mundane task, but it's important to keep track of your data to ensure your team is meeting its goals. </p>
<p>By creating reports that are specific to your needs, you can quickly and easily see how your team is performing.</p>
        </li>
        <li>
           <h4>Research the headquarters & ownership of a company to determine who to route it to</h4>
          <p>There are a few reasons why researching the headquarters ownership of a company can be helpful when routing a call. However, from my understanding most leads are inbound.</p>
          <p>First, the ownership structure of a company may not be indicative of who is actually responsible for making decisions or handling customer inquiries. </p>
          <p>Second, when prospecting, you may be able to speak with someone at the headquarters who can help resolve the issue.</p>
        </li>
        <li>
<h4> Evaluate OSS sponsorship applications </h4>
<p> OSS sponsorship applications are not typically the main focus of sales teams, as there are other opportunities that are seen as more important and have a higher potential for return on investment. </p>
<p>However, that does not mean that sponsorship applications should be ignored altogether – they can still be a valuable part of a company’s overall sales strategy. </p>
        </li>
        </ul>
      <div className={styles.link}><Link href='/past'>Lets move on to the next question</Link></div>
    </div>
  )
}

export default product1
