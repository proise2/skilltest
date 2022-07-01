import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const redirect = () => {

  const onClick = () => {
    console.log('clicked')
    if (confirm("Do you want to redirect to Vercel.com?") == true) {
      window.open('https://vercel.com', '_blank');
    }
  }

  return (
    <div className={styles.container}>
      <Htmlheader title='Redirect' />
      <h2>Push the button below to redirect from the route /redirect</h2>
      <button onClick={onClick}>Hey...push this button...</button>
      <div className={styles.link}><Link href='/domain'>Lets move on to the next question</Link></div>
    </div>
  )
}

export default redirect