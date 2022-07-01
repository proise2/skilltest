import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const past = () => {
  return (
    <div className={styles.container}>
      <Htmlheader title='Work Goals' />
      <h2>What do you want to learn, or do more of, at work?</h2>
      <p>Currently I do not have much time outside of tickets and working with our team. I really want to help our product team develop and create better tools for our support team to utilize.</p>
      <p>There are a few logging utilities that I think could be made better, or else have a nicer UI to display the logs. A lot of the time our logs are out of chronological order, so just creating a tool to put them in an easier to read and in order by their time stamp would help increase troubleshooting speed.</p>
      <p>As to what I would like to learn, I would love to learn Python, currently this is a language I am not well versed in and would like to build applications that can analyze metrics and data to look for patterns.</p>
      <div className={styles.link}><Link href='/project'>Lets move on to the next question</Link></div>
    </div>
  )
}

export default past
