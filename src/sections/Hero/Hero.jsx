
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
          Minha trajetória reúne formação acadêmica em Letras,
          Ciências da Educação e Tecnologia. Atualmente, direciono
          meus estudos para a Inteligência Artificial e o
          desenvolvimento de software, unindo conhecimentos
          multidisciplinares à construção de soluções tecnológicas.
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
          <span>Desenvolvimento de Software</span>
          <span>Automação e Soluções Inteligentes</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
