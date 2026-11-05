
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <a href="#inicio" className={styles.logo}>
        RP<span>.</span>
      </a>

      <nav className={styles.nav}>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}

export default Header
