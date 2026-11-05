
import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.content}>
        <p className={styles.subtitle}>VAMOS CONVERSAR?</p>

        <h2>Entre em contato</h2>

        <p className={styles.description}>
          Estou aberta a oportunidades na área de tecnologia,
          conexões profissionais e novos desafios.
          Será um prazer conversar com você!
        </p>

        <div className={styles.links}>
          <a
            href="mailto:roberta_preissler@hotmail.com"
            className={styles.link}
          >
            <span className={styles.label}>E-mail</span>
            <strong>roberta_preissler@hotmail.com</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/roberta-preissler-giovanelli-6584b1377/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.label}>LinkedIn</span>
            <strong>Meu perfil profissional</strong>
          </a>

          <a
            href="https://github.com/RobertaPreissler"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.label}>GitHub</span>
            <strong>Meus projetos e repositórios</strong>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
