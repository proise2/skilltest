import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const improvements = () => {
  return (
    <div className={styles.container}>
      <Htmlheader title='Exercise Improvements' />
      <h2>How could we improve or alter this familiarization exercise?</h2>
      <p>I want to start by saying what I liked about it.</p>
      <p>The questions made me think on both a technical and leadership level, I think the variety of questions helped to emphasize the expectations for the role.</p>
      <p>I really like how we are integrating the questions into a web app. I think this approach helps to outline a candidate&apos;s technical knowledge by both answering the questions and outlining that they actually have a basic understanding of front end web development.</p>
      <p>I did think the assessment took longer than an hour or two, I ended up spending a bit more time on the questions as I really wanted to make sure my answers reflected what I would do rather than what I thought you might want to hear.</p>
      <p>With that being said I do not have much in the way of negative comments on the assessments, I do think a few more technical questions from a support perspective might be a good idea though to help candidates get a better feel for the type of support issues they may be feilding, or helping other support engineers with.</p>
      <div className={styles.link}><Link href='/'>Thats all, take me home!</Link></div>
    </div>
  )
}

export default improvements