import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/focus'>Product Advocate</Link>
            </li>
            <li>
                <Link href='/goals'>Past experiences</Link>
            </li>
  <li>
                <Link href='/redirect'>Using Next.js</Link>
            </li>
            <li>
                <Link href='/project'>Email Responses</Link>
            </li>
          
            <li>
                <Link href='/domain'>Recommendations</Link>
            </li>
            <li>
                <Link href='/fun'>Fun</Link>
            </li>
         
        </ul>
    </nav>
  )
}

export default Nav
