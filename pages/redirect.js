import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const redirect = () => {

  const onClick = () => {
    console.log('clicked')
    if (confirm("Hello world") == true) {
      window.open('https://vercel.com', '_blank');
    }
  }

  return (
    <div className={styles.container}>
      <Htmlheader title='Redirect' />
      <h2>Push the button below to redirect from the route /redirect</h2>
      <button onClick={onClick}>Click me</button>

<p> I had a little trouble with this one however this is my best attempt.</p>
      <div className={styles.link}><Link href='/email'>Lets move email recommendations</Link></div>
    </div>
  )
}

export default redirect
