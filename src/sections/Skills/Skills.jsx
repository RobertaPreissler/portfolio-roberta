
import styles from './Skills.module.css'

const skillGroups = [
  {
    title: 'Inteligência Artificial',
    description:
      'Formação e estudos voltados à Inteligência Artificial e ao desenvolvimento de soluções inteligentes.',
    skills: ['Inteligência Artificial', 'Engenharia de Prompts'],
  },
  {
    title: 'Programação',
    description:
      'Estudos em lógica de programação e desenvolvimento com Python.',
    skills: ['Python', 'Lógica de Programação'],
  },
  {
    title: 'Desenvolvimento de Software',
    description:
      'Experiência prática em projetos de aplicações e arquitetura de software.',
    skills: ['React', 'Next.js', 'Micro Frontends'],
  },
  {
    title: 'Ferramentas e Testes',
    description:
      'Utilização de ferramentas de versionamento e testes automatizados em projetos.',
    skills: ['Git', 'GitHub', 'Jest', 'React Testing Library'],
  },
]

function Skills() {
  return (
    <section id="habilidades" className={styles.skills}>
      <div className={styles.heading}>
        <p className={styles.subtitle}>CONHECIMENTOS E TECNOLOGIAS</p>

        <h2>Minhas habilidades</h2>

        <p className={styles.description}>
          Conhecimentos desenvolvidos ao longo da minha formação
          acadêmica e da construção de projetos práticos.
        </p>
      </div>

      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <article className={styles.card} key={group.title}>
            <h3>{group.title}</h3>

            <p>{group.description}</p>

            <div className={styles.tags}>
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
