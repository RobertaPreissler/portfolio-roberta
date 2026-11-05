
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
          formada em Letras Português/Inglês e com experiência
          na área da Educação. Ao longo da minha carreira,
          desenvolvi habilidades de comunicação, pensamento
          crítico, organização e resolução de problemas.
        </p>

        <p className={styles.description}>
          Desde 2016, atuo como professora de Língua Portuguesa
          na Prefeitura da Cidade do Rio de Janeiro. Essa
          experiência fortaleceu minha capacidade de analisar
          desafios, planejar soluções e trabalhar com diferentes
          contextos e necessidades.
        </p>

        <p className={styles.description}>
          Atualmente, curso Ciência da Computação no IBMR e
          direciono minha formação para Inteligência Artificial
          e desenvolvimento de software. Também concluí uma
          pós-graduação de 720 horas em Inteligência Artificial
          na Prática.
        </p>

        <p className={styles.description}>
          Meu objetivo é construir uma trajetória profissional
          em Tecnologia, explorando Python, Inteligência Artificial,
          automação de processos e desenvolvimento de soluções
          inteligentes.
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
              Atuação na Educação Básica, com planejamento
              pedagógico, desenvolvimento de atividades,
              acompanhamento da aprendizagem e utilização
              de recursos tecnológicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
