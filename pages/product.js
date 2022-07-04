import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const product = () => {
  return (
    
    <Htmlheader title='Product Recommendations' />
    
    <h2>Things product advocates would do.</h2>
<p>Here are the things a product advocate at Vercel might do in no particular order. List the 3 things you
would be most interested in doing and the 3 you would be least interested in doing.</p>
   
<h3>Top 3 Tasks</h3>
      <ul className={styles.card}>
        <li>
          <h4>Write direct and concise emails that dig into a prospect's pain points and needs</h4>
          <p>Identifying and understanding customer needs and desires in order to create product feedback that is valuable to the company. Email is a powerful tool for sales professionals, but it's important to use it effectively. Direct and concise emails that dig into a prospect's pain points and needs are more likely to get a response than long, rambling messages. By focusing on the needs of the prospect, you can create a connection and build trust, which can lead to a sale. </p>
        </li>
        <li>
          <h4>Hop on a Zoom call to qualify a prospect or educate them about Vercel</h4>
          <p>There are a few reasons it's important to hop on a Zoom call to qualify a prospect or educate them about Vercel. First, it's a great way to get to know the prospect and see if they're a good fit for Vercel. Second, it's a great way to educate prospects on the features and benefits of Vercel so they can make an informed decision about whether or not to sign up.</p>
        </li>
        <li>
          <h4>Attend weekly enablement meetings to level up your product and sales knowledge</h4>
<P>Enablement meetings are important because they provide an opportunity for you to learn about new products and sales techniques. By attending these meetings, you can stay up-to-date on the latest changes and developments in your industry. This will help you to better serve your customers and sell your products.</P>       
</li>
      </ul>

      <h3>Bottom 3 Tasks</h3>
        <li>
          <h4>Create Salesforce reports to keep track of data pertinent to the team or your stats</h4>
          <p>Salesforce reporting can seem like a mundane task, but it's important to keep track of your data to ensure your team is meeting its goals. By creating reports that are specific to your needs, you can quickly and easily see how your team is performing.</p>
        </li>
               <li>
          <h4>Evaluate an application to help determine if it's commercial or not</h4>
          <p>There are a few reasons why evaluating an application to help determine if it's commercial or not is one of the more least interesting tasks. First, many applications can be used for both commercial and non-commercial purposes. The purpose of an application doesn't always reflect how it will be used.</p>
        </li>
        <li>
          <h4>Research the headquarters & ownership of a company to determine who to route it to</h4>
          <p>There are a few reasons why researching the headquarters ownership of a company to determine who to route it to may not be of interest. </p>
<p>First, the ownership structure of a company may not be indicative of who is actually responsible for making decisions or handling customer inquiries. </p>
<p>Second, even if the ownership structure does indicate who is responsible for customer inquiries, the company may have a process in place for routing customer inquiries to the correct department regardless of who the owner is.</p>
        </li>
        <li>
          <h4>Work with people to figure out if Vercel is suitable for their use case</h4>
          <p>I feel like this would come up naturally on tickets being submitted to support. While not the most important task on this list, I do think this topic is something support engineers should consider while troubleshooting issues. It is important however that support does not make the customer feel like Vercel offers them no value to their use case, we should be helping them better understand in what way Vercel will help their use case.</p>
        </li>
      </ul>
      <div className={styles.link}><Link href='/past'>Lets move on to the next question</Link>
    </div>
  )
}

export default product
