import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Htmlheader title='Skills Test' />
      <h1>Dawn Jama</h1>
  <p> <h3>Hi, I'm a former teacher and aspiring product advocate. </h3> </P>
<p>
This portfolio is built with <b>Next.js </b> and will showcase my skill test for a product advocate role.</p>

<img src=".jpg" loading="eager" alt="Dawn Jama Profile Photo" class="image">


 <Link href='/product'>Lets Get Started</Link>

---

<p>- Twitter <Link href='https://twitter.com/ByeAJ1'> @byeAJ1 </a>
<p>- GitHub <Link href='https://github.com/proise2'>@proise2</a>
<p>- Email <a href = "mailto: dawnjama2@gmail.com">dawnjama2@gmail.com</a>
                    
                   
      <Link href='/product'>Lets Get Started</Link>
    </div>
  )
}
