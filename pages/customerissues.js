import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const customerissues = () => {
  return (
    <div className={styles.container}>
      <Htmlheader title='Common Issues' />
      <h2>What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?</h2>
      <p>I would think the most common problem would be a failed deployment. There are an infinite amount of different issues that could go wrong when deploying largely related to the customer&apos;s code they are trying to deploy.</p>
      <p>To overcome common problems I would direct customers to review the errors they are seeing when trying to build/deploy their project. Sometimes these errors can point out a simple issue, and most of the time the stack trace can lead you to the file or line of code in your project that is having the issue.</p>
      <p>I would also recommend that they read through the getting started documentation and direct them to Vercel&apos;s Deployment documentation to help walk them step by step through the process.</p>
      <p>I think directing customers to documentation and then also explaining the major points in that document helps to train customers to look through a product&apos;s documentation, developer pages, or FAQ to help them overcome an issue.</p>
      <div className={styles.link}><Link href='/improvements'>Lets move on to the next question</Link></div>
    </div>
  )
}

export default customerissues