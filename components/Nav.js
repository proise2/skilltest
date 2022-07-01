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
                <Link href='/focus'>Focus</Link>
            </li>
            <li>
                <Link href='/goals'>Goals</Link>
            </li>
            <li>
                <Link href='/project'>Project</Link>
            </li>
            <li>
                <Link href='/redirect'>Redirect</Link>
            </li>
            <li>
                <Link href='/domain'>Domain</Link>
            </li>
            <li>
                <Link href='/commits'>Commit Issue</Link>
            </li>
         
        </ul>
    </nav>
  )
}

export default Nav
