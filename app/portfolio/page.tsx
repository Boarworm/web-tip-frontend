import HeroSecondary from "@/components/HeroSecondary"
import Container from "@/components/Container"
import projectsData from '@/data/projects.json'
import CardProject from "@/components/CardProject"

export default function PagePortfolio() {
  return (
    <main>
      <HeroSecondary title="Portfolio"/>
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map(project => (
            <CardProject
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}
