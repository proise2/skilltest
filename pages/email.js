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
<p><b><u>Sales Inquiry: Do I need Enterprise? </u></b></p>
<p><b>Subject:</b> Sales Lead for barnesandnoble.com</p>
<p><b>Name:</b> Joe Fox</p>
<p><b>Employees:</b> 1000+</p>
<p><b>How can we help you:</b> New site launching soon using Next.js and we are thinking about using Vercel to host. I would like more information about the Enterprise option.</p>
 </li>
<li><p>Hi Joe,</p>
<p>My name is Dawn, and I'm a product advocate at Vercel. I wanted to reach out because I think our platform could be a great fit for your needs. </p>
<p>I understand that you're a Sales Lead for barnesandnoble.com, and you're looking to launch a new site soon using Next.js. Vercel can provide the performance and scalability you need for your project.</p>
<p>Our Enterprise plan is designed specifically for businesses like yours, with features like deploying instantly, scaling automatically, and serving personalized content around the globe. </p>
<p>I'd be happy to schedule a call with you to provide more information about this option and how we can help you meet your goals.</p>
<p>Thanks for your time, </p>
<p>Dawn </p>
</li>   

<li> 
<p><b> <u>Sales Inquiry: Would Pro or Enterprise fit better for my team?</u> </b></p>
<p><b>Subject:</b> Sales Lead for hipcamp.com </p>
<p><b>Name:</b> Melissa Wright</p>
<p><b>Employees:</b> 10-100</p>
<p><b>How can we help you: </b> We are looking to re-platform our site and are considering Vercel. Would like Product Advocate Position at Vercel: Skills Test Template 3 to evaluate options to see if Pro or Enterprise would fit out needs better. Timeline is Q3. Can you help?</p>
 </li>

<li><p>Hi Melissa,</p>
<p>I hope this email finds you well. My name is Dawn and I'm a product advocate at Vercel.</p>
<p>Our Pro plan is for small teams with moderate bandwidth and collaboration requirements. Enterprise is for teams seeking greater performance, collaboration, and security. </p>
<p>I believe Vercel would be a great fit for your company as you look to re-platform your site. I would love to schedule a meeting with you to discuss your needs in more detail and see if our Pro or Enterprise plan would be a better fit for you.</p>
<p>If you're interested in learning more about Vercel, please let me know and I'll be happy to set up a meeting. Thank you for your time and I look forward to hearing from you soon. </p>
<p>Best, </p>
<p>Dawn </p>
</li>   
</ul>

      <div className={styles.link}><Link href='/recommendations'>Lets move on to the next question</Link></div>
    </div>
  )
}

export default email
