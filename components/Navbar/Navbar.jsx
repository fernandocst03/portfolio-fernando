import Link from 'next/link'
import ButtonTheme from '../ButtonTheme/ButtonTheme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import style from './Navbar.module.css'

export default function NavbarContainer () {
  return (
    <nav className={style.navbar}>
      <ul className={style.listItemsNavbar}>
        <Link href='/' className={style.titleNavbar}>
          <p className={style.titleNavbar}>FD&nbsp;</p>
          <FontAwesomeIcon icon={faCode} className={style.iconNavbar} />
        </Link>
        <Link href='#proyectos' className={style.itemNavbar}>Proyectos</Link>
        <Link href='#sobreMi' className={style.itemNavbar}>Sobre mí</Link>
      </ul>
      <div>
        <ButtonTheme />
      </div>
    </nav>
  )
}
