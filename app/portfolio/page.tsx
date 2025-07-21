import HeroSecondary from "@/components/HeroSecondary";
import Container from "@/components/Container";
import mockData from "@/data/mock-data.json";
import CardProject from "@/components/CardProject";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PagePortfolio() {
  const breadcrumbs = [{ name: "Portfolio", url: "/portfolio" }];

  return (
    <main>
      <HeroSecondary title="Portfolio">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </HeroSecondary>
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockData.projects.map((project) => (
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
  );
}
