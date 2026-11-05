
import styles from './About.module.css'

function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.content}>
        <p className={styles.subtitle}>
          CONHEÇA MINHA TRAJETÓRIA
        </p>

        <h2>Sobre mim</h2>

        <p className={styles.description}>
          Sou uma profissional com trajetória multidisciplinar,
          reunindo experiências nas áreas de Letras, Educação
          e Tecnologia. Minha atuação como professora de Língua
          Portuguesa na Prefeitura da Cidade do Rio de Janeiro,
          desde 2016, fortaleceu competências como comunicação,
          pensamento crítico, planejamento e resolução de problemas.
        </p>

        <p className={styles.description}>
          Atualmente, curso Ciência da Computação no IBMR e já
          concluí uma pós-graduação de 720 horas em Inteligência
          Artificial na Prática. Desenvolvo projetos para ampliar
          meus conhecimentos e minhas habilidades na área tecnológica.
        </p>

        <p className={styles.description}>
          Tenho especial interesse em Inteligência Artificial,
          desenvolvimento de software, Python e bancos de dados,
          especialmente na criação de soluções inteligentes,
          automação de processos e integração de sistemas.
        </p>
      </div>

      <div className={styles.details}>
        <div className={styles.education}>
          <h3>Formação acadêmica</h3>

          <div className={styles.item}>
            <strong>Ciência da Computação</strong>
            <span>IBMR · Em andamento</span>
          </div>

          <div className={styles.item}>
            <strong>Mestrado em Ciências da Educação</strong>
            <span>Concluído em 2025</span>
          </div>

          <div className={styles.item}>
            <strong>
              Pós-graduação em Inteligência Artificial na Prática
            </strong>
            <span>720 horas · Concluída</span>
          </div>

          <div className={styles.item}>
            <strong>
              Licenciatura em Letras – Português/Inglês
            </strong>
            <span>Universidade Castelo Branco · 2003</span>
          </div>

          <div className={styles.item}>
            <strong>
              Pós-graduação em Letras – Português e Literatura
            </strong>
            <span>Concluída</span>
          </div>

          <div className={styles.item}>
            <strong>
              Pós-graduação em Orientação Educacional
            </strong>
            <span>Concluída</span>
          </div>
        </div>

        <div className={styles.experience}>
          <h3>Experiência profissional</h3>

          <div className={styles.item}>
            <strong>Professora de Língua Portuguesa</strong>
            <span>Prefeitura da Cidade do Rio de Janeiro</span>
            <span>2016 – atual</span>
            <p>
              Atuação na Educação Básica, com planejamento de aulas,
              desenvolvimento de atividades pedagógicas,
              acompanhamento da aprendizagem e utilização de
              recursos tecnológicos no contexto educacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
