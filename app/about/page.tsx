import HeroSecondary from "@/components/HeroSecondary"
import Container from "@/components/Container"
import WorkExperience from '@/components/WorkExperience'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function PageAbout() {
  const breadcrumbs = [
    { name: "About", url: "/about" },
  ]

  return (
    <main>
      <HeroSecondary title="About">
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
      </HeroSecondary>
      <Container className="py-12">
        <WorkExperience/>
      </Container>
    </main>
  )
}
