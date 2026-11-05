
import styles from './Projects.module.css'

const projects = [
  {
    title: 'Sistema de Pedidos com Micro Frontends',
    description:
      'Aplicação organizada em micro frontends, com um container principal, um módulo de cardápio e outro de pedidos. A comunicação entre os módulos utiliza eventos personalizados.',
    technologies: ['Next.js', 'React', 'Webpack', 'CustomEvent'],
    category: 'Arquitetura de Software',
    github: 'https://github.com/RobertaPreissler/micro-frontends-pedidos',
  },
  {
    title: 'Lista de Tarefas com Testes',
    description:
      'Aplicação de gerenciamento de tarefas com testes automatizados para verificar o comportamento dos componentes e funcionalidades.',
    technologies: ['Next.js', 'Jest', 'React Testing Library'],
    category: 'Desenvolvimento e Testes',
    github: 'https://github.com/RobertaPreissler/lista-tarefas-testes',
  },
  {
    title: 'Blog com Next.js',
    description:
      'Projeto de blog com organização de conteúdo, páginas de artigos e melhorias voltadas à estrutura e ao desempenho da aplicação.',
    technologies: ['Next.js', 'React', 'JavaScript'],
    category: 'Desenvolvimento Web',
    github: 'https://github.com/RobertaPreissler/blog-nextjs',
  },
]

function Projects() {
  return (
    <section id="projetos" className={styles.projects}>
      <div className={styles.heading}>
        <p className={styles.subtitle}>MEUS TRABALHOS</p>
        <h2>Projetos em destaque</h2>
        <p className={styles.description}>
          Conheça alguns projetos que desenvolvi durante minha
          jornada de aprendizado em tecnologia.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article className={styles.card} key={project.title}>
            <span className={styles.category}>
              {project.category}
            </span>

            <h3>{project.title}</h3>

            <p className={styles.cardDescription}>
              {project.description}
            </p>

            <div className={styles.technologies}>
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              Ver código no GitHub →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
