
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>
          Olá, seja bem-vindo(a)!
        </p>

        <h1>
          Sou Roberta,
          <span>
            {' '}estudante de Ciência da Computação e entusiasta de Inteligência Artificial.
          </span>
        </h1>

        <p className={styles.description}>
          Tenho uma trajetória multidisciplinar, com formação
          em Letras e Ciências da Educação. Atualmente, direciono
          minha formação para a tecnologia, desenvolvendo projetos
          práticos e aprofundando meus conhecimentos em Inteligência
          Artificial e desenvolvimento de software.
        </p>

        <a href="#projetos" className={styles.button}>
          Conheça meus projetos
        </a>
      </div>

      <div className={styles.highlight}>
        <span>ÁREAS DE INTERESSE</span>

        <div className={styles.interests}>
          <span>Inteligência Artificial</span>
          <span>Python</span>
          <span>Banco de Dados</span>
          <span>Desenvolvimento de Software</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
