import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const recommendations = () => {
  return (
    <div className={styles.container}>
      <Htmlheader title='Personal Recommendations' />
      <h2>When it comes to looking for a solution for hosting your Next.js site, what are some of the common things you would value as the Engineering Manager for:</h2>
      <h3>1. A mom and pop business? </h3>
      <p>The hosting solution would need to be scalable, easy to maintain, and able to operate on a budget. Being mindful of the costs of hosting and the limitations that come with it.</p>
      <p>If your main concern is cost-effectiveness and easy deployment, then a shared hosting solution would be better suited for your needs. </p>
      <p>Working with a smaller budget, the hosting solution would need to be cost effective. Another critical aspect of the hosting solution is that it allows for a fast and reliable connection.</p>
      <h3>2. An NFT?</h3>
      <p>Some of the common things I would value as the Engineering Manager for a Next.js site would be:</p>
      <p>Having access to a directory structure with working projects that are easy for people to jump into and start contributing on, rather than having individual folders where all the code is. </p>
      <p>A standard process for setting up development environments in our build system that is documented.</p>
      <h3>3. A Marketing Page for a large corporation like Nintendo</h3>
      <p> Some things that would be important to me as the Engineering Manager for a Next.js website are: </p> 
      <p>Ability to configure the Next.js server globally. </p>
      <p>Expansive set of features that allow us to stay up to date with new technology and trends </p>
      <p>Support for multiple languages (particularly English) in strategic locations like Europe and Asia-Pacific. </p>
      <p>Next.js has always provided a great platform for large scale web applications, and it's able to leverage community. </p>
      
      <div className={styles.link}><Link href='/index'>Back to home</Link></div>
    </div>
  )
}

export default recommendations
